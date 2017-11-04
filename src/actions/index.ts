export const addTodo = (text: string, id: number): AddTodoAction => (
  {
    type: 'ADD_TODO',
    id,
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
