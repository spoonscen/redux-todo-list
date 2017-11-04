interface Todo {
  readonly id: number,
  readonly text: string,
  readonly completed: boolean
}

interface TodoState {
  readonly completed?: boolean
  readonly id?: number
}

interface TodoListState {
  readonly todos: Todo[]
  readonly visibilityFilter: Filter
}

interface OwnProps {
  readonly filter: Filter
}
type OnTodoClick = (id: number) => void

interface TodoProps {
  readonly onClick: any
  readonly completed: boolean
  readonly text: string
}

interface TodoListProps {
  readonly todos: Todo[]
  readonly onTodoClick: OnTodoClick
}

interface LinkProps {
  readonly active: boolean
  readonly children: JSX.Element
  readonly onClick: () => void
}

type Filter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED'

interface AddTodoAction {
  readonly type: 'ADD_TODO'
  readonly id: number
  readonly text: string
}

interface TodoToggleAction {
  readonly type: 'TOGGLE_TODO',
  readonly id: number
}

interface VisibilityFilterAction {
  readonly type: 'SET_VISIBILITY_FILTER'
  readonly filter: Filter
}

type TodoActions = AddTodoAction | TodoToggleAction