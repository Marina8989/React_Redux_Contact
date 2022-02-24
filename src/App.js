import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './store/counter/actions';

const App = (props) => {
    return (
        <>
        <h2>Redux</h2>
        <h4>{props.counter}</h4>
        <button onClick={props.increment}>increment</button>
        <button onClick={props.decrement}>decrement</button>
        </>
    )
}

const mapStateToProps = (state) => ({
     counter: state.counter
})

const mapDispatchToProps = {
    increment: incrementCounter,
    decrement: decrementCounter
}


export default connect(mapStateToProps, mapDispatchToProps)(App);