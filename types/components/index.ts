import { Todo } from '../index'

export type OnTodoClick = (id: number) => void

export interface TodoProps {
  readonly onClick: any
  readonly completed: boolean
  readonly text: string
}

export interface TodoListProps {
  readonly todos: Todo[]
  readonly onTodoClick: OnTodoClick
}

export interface LinkProps {
  readonly active: boolean
  readonly children: JSX.Element
  readonly onClick: () => void
}