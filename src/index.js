import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";
//import { createStore } from "redux";
import App from './App';

//const store = createStore()

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


