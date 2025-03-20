// Create an input that contains a number that increments and decrements and stop decrementing
// when it's already 0 and a reset to 0, using a useReducer hook

import { useReducer } from 'react';
const UseReducerExercise = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { num: state.num + action.payload };
      case 'decrement':
        return { num: state.num === 0 ? state.num : state.num - action.payload };
      case 'reset':
        return { num: 0 };
    }
  };

  const initialState = { num: 1 };
  const [count, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'increment', payload: 1 });
  };

  const decrement = () => {
    dispatch({ type: 'decrement', payload: 1 });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };
  return (
    <>
      <input type="text" value={count.num} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset to 0</button>
    </>
  );
};

export default UseReducerExercise;
