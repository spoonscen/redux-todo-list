import { expect } from 'chai'
import { todo } from '../../src/reducers/todos'
import { AddTodoAction, TodoToggleAction } from '../../types'

describe('todo reducer', () => {
  it('handles an ADD_TODO action', () => {
    const mockState = {}
    const mockAddTodoAction = {
      type: 'ADD_TODO',
      text: 'foo',
      id: Date.now()
    } as AddTodoAction
    expect(todo(mockState, mockAddTodoAction)).to.eql({
      id: mockAddTodoAction.id,
      text: mockAddTodoAction.text,
      completed: false
    })
  })
  it('handles a TOGGLE_TODO action', () => {
    const mockId = Date.now()
    const mockState = {
      id: mockId,
      completed: false
    }
    const mockToggleTodoAction = {
      type: 'TOGGLE_TODO',
      text: 'foo',
      id: mockId
    } as TodoToggleAction
    expect(todo(mockState, mockToggleTodoAction)).to.eql({
      id: mockToggleTodoAction.id,
      completed: !mockState.completed
    })
  })
})

describe('todos reducer', () => {
  it('handles an ADD_TODO action')
  it('handles an TOGGLE_TODO action')
})