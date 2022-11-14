import React from 'react'
import { db } from './firebase'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Todo({ todo }) {

  return (
    <div className='todo-container'>
      <div className='todo-list'>
        <h1 className='child'>{todo.title}</h1>
        <p className='child'>{todo.desc}</p>
        <button className='danger child' onClick={event => db.collection('todos').doc(todo.id).delete()}>Delete todo</button>
      </div>
    </div>
  )
}

export default Todo