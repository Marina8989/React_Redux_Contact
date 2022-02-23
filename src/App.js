import React from "react";
import {connect} from 'react-redux'

const App = (props) => {
    return (
        <div>
            <h2>Redux Tutorial</h2>
            <h3>{props.counter}</h3>
        </div>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

export default connect(mapStateToProps)(App)
