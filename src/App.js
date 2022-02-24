import React, {useState} from 'react';
import { connect } from 'react-redux';
import { incrementNumber, decreaseNumber, counterUserNumber  } from "./store/counter/actions";

const App = (props) => {
    const [value, setValue] = useState('')
    return (
        <>
          <h3>Redux</h3>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <h5>{props.counter}</h5>
          <button onClick={props.decrease}>decrease</button>
          <button onClick={props.increment}>increment</button>
          <button onClick={() => props.counterUserNumber(value)}>add numbers</button>
        </>
    )
}
const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = {
    increment: incrementNumber,
    decrease: decreaseNumber ,
    counterUserNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(App);