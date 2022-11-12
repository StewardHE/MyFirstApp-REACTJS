
// import react
import React from 'react'

// component
export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>Tarea</li>
      ))}
    </ul>
  )
}
