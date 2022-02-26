import React, {useState} from 'react';
import {connect} from 'react-redux';
import { addTodo, removeTodo } from './store/todos/actions';

const App = (props) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
       e.preventDefault();
       props.addTodo(value);
       setValue('');
    }
    return (
        <>
          <form onSubmit={handleSubmit}>
              <input value={value} onChange={(e) => setValue(e.target.value)}/>
          </form>
          <div style={{display: 'flex'}}>
          <div>
          {props.todos.map(todo => <li onClick={() => props.removeTodo(todo)} key={todo}>{todo}</li>)}
          </div>
          <div>
         {props.deletedTodos.map(el => <li key={el}>{el}</li>)}
         </div>
         </div>
        </>
    )
}
const mapStateToProps = (state) => ({
  todos: state.todos.data,
  deletedTodos: state.deletedTodos.data
})

const mapDispatchToProps = {
    addTodo,
    removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);