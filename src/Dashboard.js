import { useEffect, useState } from 'react';
import { Button, FormControl, Input } from '@mui/material';
import './App.css';
import Todo from './Todo';
import { db } from './firebase';
import { auth } from './firebase';
import { query, collection, onSnapshot, addDoc, serverTimestamp, orderBy, } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [description, setDescription] = useState('')
  const [filterTodo, setFilterTodo] = useState('')
  const navigate = useNavigate()

  console.log('input', input);

  // this funtion fires when clicking on button
  const addTodo = async (event) => {
    event.preventDefault()
    await addDoc(collection(db, 'todos'), {
      title: input,
      desc: description,
      timestamp: serverTimestamp()
    })
    setInput('') //clears the previous input
    setDescription('')
  }

  const handleLogout = () => {
    signOut(auth)
    navigate('/')
  }
  // listening to db and fetch new todos when they get added/removed
  useEffect(() => {
    const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'))
    const unSubscribe = onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return unSubscribe
  }, [])
  return (
    <div className="home">
      <div className='logoutbtn'>
        <Button variant="contained" color='error' onClick={handleLogout}>Log out</Button>
      </div>
      <h1>Todo</h1>
      <form>
        <FormControl>
          <Input type="text" placeholder='type title' value={input} onChange={event => setInput(event.target.value)} />
          <Input type="text" placeholder='type description' value={description} onChange={event => setDescription(event.target.value)} />
        </FormControl>
        <Button disabled={!input || !description} onClick={addTodo} type='submit'
          variant="contained" color='primary'>Add todos</Button>
      </form>
      <input style={{ width: '250px', height: '20px', textAlign: 'center', marginTop: '10px' }}
        value={filterTodo}
        onChange={event => setFilterTodo(event.target.value)}
        placeholder='search todos by title'
        type='text'
      />
      <br />
      <br />
      <ul>
        {todos.filter(todo => todo.title.toLowerCase().includes(filterTodo))
          .map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </ul>
    </div>
  );
}

export default Dashboard;
