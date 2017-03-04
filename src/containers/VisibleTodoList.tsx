import { connect } from 'react-redux'
import { todoToggle } from '../actions'
import TodoList from '../components/TodoList'
import { Filter, Todo, TodoListState, OnTodoClick } from '../../types'

const getVisibleTodos = (todos: Todo[], filter: Filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state: TodoListState) => (
  {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
)

const mapDispatchToProps = (dispatch: any): { onTodoClick: OnTodoClick } => (
  {
    onTodoClick: (id) => { dispatch(todoToggle(id)) }
  }
)

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList