export type Filter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED'

export interface TodoAction {
  type: 'ADD_TODO'
  id: number
  text: string
}

export interface VisibilityFilterAction {
  type: 'SET_VISIBILITY_FILTER'
  filter: Filter
}

export interface TodoToggleAction {
  type: 'TOGGLE_TODO',
  id: number
}

export type TodoActions = TodoAction | TodoToggleAction | VisibilityFilterAction