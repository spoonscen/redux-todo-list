export type Filter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED'

export interface AddTodoAction {
  readonly type: 'ADD_TODO'
  readonly id: number
  readonly text: string
}

export interface TodoToggleAction {
  readonly type: 'TOGGLE_TODO',
  readonly id: number
}

export interface VisibilityFilterAction {
  readonly type: 'SET_VISIBILITY_FILTER'
  readonly filter: Filter
}

export type TodoActions = AddTodoAction | TodoToggleAction