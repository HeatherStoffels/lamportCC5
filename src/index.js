import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!

const initialState = 0;

const passengerState = [];

const firstReducer = (state = initialState, action) => {
    console.log("in first reducer", state, action);
    
    if (action.type === 'speedUp'){
      return state + action.payload;
    } else if (action.type === 'slowDown'){
    return state - action.payload;
} else if (action.type === "passenger") {
    // console.log("in first reducer", action.type, state);
    return { ...state, passenger: action.payload };
  }
 
  
  };
  const secondReducer = (state = passengerState, action) => {
    console.log("in second reducer", state, action);
    
   if (action.type === "passenger") {
    // console.log("in first reducer", action.type, state);
    return { ...state, passenger: action.payload };
  }
 
  
  };

// use reducer in store
const storeInstance = createStore( firstReducer, secondReducer );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));


