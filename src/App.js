import React, { useState } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, counterNumber } from './store/counter/actions';

const App = (props) => {
    const [value, setValue] = useState('');
    return (
        <>
        <h2>Redux</h2>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <h4>{props.counter}</h4>
        <button onClick={props.increment}>increment</button>
        <button onClick={props.decrement}>decrement</button>
        <button onClick={() => props.counterNumber(value)}>number</button>
        </>
    )
}

const mapStateToProps = (state) => ({
     counter: state.counter
})

const mapDispatchToProps = {
    increment: incrementCounter,
    decrement: decrementCounter,
    counterNumber
}


export default connect(mapStateToProps, mapDispatchToProps)(App);