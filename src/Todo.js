import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'

function Todo({ text }) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={text} secondary='dummy deadline'/>
      </ListItem>
    </List>
  )
}

export default Todo