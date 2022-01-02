import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";
import { createStore } from "redux";
import App from './App';
import contactReducer from "./redux/reducers/contactReducer";

const store = createStore(contactReducer)

ReactDOM.render(
  <Provider store={store}>
   <Router>
    <App />
   </Router>
  </Provider>,
  document.getElementById('root')
);


