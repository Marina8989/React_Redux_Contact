import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './store/todos/actions';

const App = (props) => {
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
     e.preventDefault();
     props.addTodo(value)
     setValue('')
  }
    return (
        <>
          <h3>Redux</h3>
          <form onSubmit={handleSubmit}>
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
          </form>
          {props.todos.map(todo => {
            return (
              <li key={todo} onClick={() => props.removeTodo(todo)}>{todo}</li>
            )
          })}
        </>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data
})

const mapDispatchToProps = {
  addTodo,
  removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);