import * as React from 'react'
import Todo from './Todo'
import { TodoListProps } from '../../types'

const TodoList = ({ todos, onTodoClick }: TodoListProps) => (
  <ul>
    {todos.map( todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)


export default TodoList