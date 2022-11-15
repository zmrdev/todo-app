import React from 'react'
import { db } from './firebase'
import { deleteDoc, doc } from 'firebase/firestore';

function Todo({ todo }) {

  return (
    <div className='todo-container'>
      <div className='todo-list'>
        <h1 className='child'>{todo.title}</h1>
        <p className='child'>{todo.desc}</p>
        <button className='danger child' onClick={() => deleteDoc(doc(db, 'todos', todo.id))}>Delete todo</button>
      </div>
    </div>
  )
}

export default Todo