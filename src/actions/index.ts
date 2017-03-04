import { TodoAction, TodoToggleAction, VisibilityFilterAction, Filter } from '../../types'

let nextTodoId = 0

export const addTodo = (text: string): TodoAction => (
  {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  }
)

export const setVisibilityFilter = (filter: Filter): VisibilityFilterAction => (
  {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }
)

export const todoToggle = (id: number): TodoToggleAction => (
  {
    type: 'TOGGLE_TODO',
    id,
  }
)