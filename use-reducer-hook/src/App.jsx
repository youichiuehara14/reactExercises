import React from 'react';
import './App.css';
import UseReducerHook from './components/UseReducerHook';
import UseReducerExercise from './components/UseReducerExercise';
import UseReducerExercise2 from './components/UseReducerExercise2';
import UseReducerPractice from './components/UseReducerPractice';
import UseReducerFinal from './components/UseReducerFinal';
import UseReducerDayTwo from './components/UseReducerDayTwo';
const App = () => {
  return (
    <div>
      <h1>Day 2 of useReducer Hook</h1>
      <UseReducerDayTwo />
      {/* <h1>useReducer Increment & Decrement</h1>
      <UseReducerHook />
      <h1>Just a useReducer Increment & Decrement Exercise</h1>
      <UseReducerExercise />
      <h1>Another useReducer Increment & Decrement Exercise</h1>
      <UseReducerExercise2 />
      <h1>Another useReducer Increment & Decrement Exercise!</h1>
      <UseReducerPractice />
      <h1>Final useReducer Increment & Decrement Exercise!</h1>
      <UseReducerFinal /> */}
    </div>
  );
};

export default App;
