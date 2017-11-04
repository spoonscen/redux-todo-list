import * as React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }: any) => {
  let input: HTMLInputElement

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.value.trim()) return
    dispatch(addTodo(input.value, Date.now()))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <input ref={node => { input = node }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
