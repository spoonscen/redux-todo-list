import { Todo } from '../index'

export type OnTodoClick = (id: number) => void

export interface TodoProps {
  onClick: any
  completed: boolean
  text: string
}

export interface TodoListProps {
  todos: Todo[]
  onTodoClick: OnTodoClick
}

export interface LinkProps {
  active: boolean
  children: JSX.Element
  onClick: () => void
}