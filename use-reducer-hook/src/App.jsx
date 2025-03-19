import React from 'react';
import './App.css';
import UseReducerHook from './components/UseReducerHook';
const App = () => {
  return (
    <div>
      <h1>useReducer Increment & Decrement</h1>
      <UseReducerHook />
      <h1>To do using useReducer</h1>
    </div>
  );
};

export default App;
