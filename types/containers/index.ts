import { Todo, Filter } from '../index'

export interface TodoListState {
  todos: Todo[]
  visibilityFilter: Filter
}

export interface OwnProps {
  filter: Filter
}