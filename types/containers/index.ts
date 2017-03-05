import { Todo, Filter } from '../index'

export interface TodoListState {
  readonly todos: Todo[]
  readonly visibilityFilter: Filter
}

export interface OwnProps {
  readonly filter: Filter
}