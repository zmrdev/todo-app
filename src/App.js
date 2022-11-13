import { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  console.log('input', input);

  // this funtion fires when clicking on button
  const addTodo = (event) => {
    event.preventDefault() //this stops refresh
    console.log('addTodo is working');
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input])
    setInput('') //clears the previous input
  }

  // listening to db and fetch new todos when they get added/removed
  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  },[])
  return (
    <div className="App">
      <h1>Hello zameer</h1>
      <form>
        <FormControl>
          <InputLabel >Write a todo</InputLabel>
          <Input type="text" value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} onClick={addTodo} type='submit'
          variant="contained" color='primary'>Add todos</Button>

      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
