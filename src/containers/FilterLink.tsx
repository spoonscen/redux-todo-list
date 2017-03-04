import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import { TodoListState, OwnProps } from '../../types'

const mapStateToProps = (state: TodoListState, ownProps: OwnProps) => (
  {
    active: ownProps.filter === state.visibilityFilter
  }
)

const mapDispatchToProps = (dispatch: any, ownProps: OwnProps) => (
  {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  }
)

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink