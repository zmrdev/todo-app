import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import {db} from './firebase'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Todo({ todo }) {
  
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={todo.todo} secondary={todo.desc}/>
      </ListItem>
      <DeleteForeverIcon onClick={event => db.collection('todos').doc(todo.id).delete()}/>
    </List>
  )
}

export default Todo