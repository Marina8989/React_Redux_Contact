import React, {useEffect} from "react";
import { connect } from "react-redux";
import {getData} from "./store/todos/action";


const App = (props) => {
   useEffect(()=>{
    props.getData();
   }, [])
   console.log('test', props.todos)
    return (
        <div>
            <h2>Namelist</h2>
            {props.isLoading && <h3>Loading...</h3>}
            {props.todos.map(todo => <div key={todo.name}>{todo.name}</div>)}
        </div>
    )
}

const mapStateToProps = (state) => ({
     todos: state.todos.data,
     isLoading: state.todos.isLoading,
     isError: state.todos.isError
})
const mapDispatchToProps = {
  getData
}

export default connect(mapStateToProps, mapDispatchToProps )(App)
