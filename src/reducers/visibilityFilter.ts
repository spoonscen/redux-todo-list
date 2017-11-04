const visibilityFilter = (state: Filter = 'SHOW_ALL', action: VisibilityFilterAction) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter