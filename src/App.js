import React from 'react';
import {connect } from 'react-redux';
import { incrementCounter } from  './store';

const App = (props) => {
    return (
        <>
        <h2>Redux...</h2>
        <h4 onClick={props.increment}>{props.counter}</h4>
        </>
    )
}
const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = {
    increment: incrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(App)