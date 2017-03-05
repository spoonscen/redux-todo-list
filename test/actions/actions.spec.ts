import { expect } from 'chai'
import { addTodo, setVisibilityFilter, todoToggle } from '../../src/actions'

describe('redux actions', () => {

  describe('addTodo', () => {
    it('returns an addTodo action', () => {
      const mockTodoText = 'someText'
      const addTodoAction = addTodo(mockTodoText, 1)
      expect(addTodoAction).to.be.an('object').with.keys(['type', 'id', 'text'])
      expect(addTodoAction.type).to.equal('ADD_TODO')
      expect(addTodoAction.id).to.equal(1)
      expect(addTodoAction.text).to.equal(mockTodoText)
    })
  })

  describe('setVisibilityFilter', () => {
    it('returns a setVisibilityFilter action', () => {
      const mockFilter = 'SHOW_ACTIVE'
      const visibilityFilterAction = setVisibilityFilter(mockFilter)
      expect(visibilityFilterAction).to.be.an('object').with.keys(['type', 'filter'])
      expect(visibilityFilterAction.type).to.equal('SET_VISIBILITY_FILTER')
      expect(visibilityFilterAction.filter).to.equal(mockFilter)
    })
  })

  describe('todoToggle', () => {
    it('returns a todoToggle action', () => {
      const mockId = Date.now()
      const todoToggleAction = todoToggle(mockId)
      expect(todoToggleAction).to.be.an('object').with.keys(['type', 'id'])
      expect(todoToggleAction.type).to.equal('TOGGLE_TODO')
      expect(todoToggleAction.id).to.equal(mockId)
    })
  })

})