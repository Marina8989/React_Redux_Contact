import React from "react";
import { connect } from "react-redux";
import {incrementCounter} from './counter/action';

const App = (props) => {
    return (
        <div>
            <h2>{props.counter}</h2>
            <button onClick={props.increment}>Add Number</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
     counter: state.counter
})
const mapDispatchToProps = {
    increment: incrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps )(App)
