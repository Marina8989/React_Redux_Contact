import React, {useEffect} from "react";
import { connect } from "react-redux";
import {getData, removeUser} from "./store/todos/action";


const App = (props) => {
   useEffect(()=>{
    props.getData();
   }, [])
   console.log('test', props.todos)
    return (
        <div>
            <h2>Namelist</h2>
            {props.isLoading && <h3>Loading...</h3>}
            {props.todos.map(todo => <div key={todo.name} onClick={() => removeUser(todo)}>{todo.name}</div>)}
            {props.deletedUser.map(el => <div key={el.name}>{el.name}</div>)}
        </div>
    )
}

const mapStateToProps = (state) => ({
     todos: state.todos.data,
     isLoading: state.todos.isLoading,
     isError: state.todos.isError,
     deletedUser: state.deletedUser.data
})
const mapDispatchToProps = {
  getData,
  removeUser
}

export default connect(mapStateToProps, mapDispatchToProps )(App)
