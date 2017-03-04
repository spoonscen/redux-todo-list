import * as  React from 'react'
import { TodoProps } from '../../types/components'

const Todo = ({ onClick, completed, text }: TodoProps): JSX.Element => (
  <li
    onClick={ onClick }
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo