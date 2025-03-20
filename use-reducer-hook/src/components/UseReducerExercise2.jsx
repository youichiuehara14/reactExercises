import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { num: state.num + action.payload };
    case 'subtract':
      return { num: state.num === 0 ? state.num : state.num - action.payload };
    case 'reset':
      return { num: 0 };
    case 'set':
      return { num: action.payload };
    default:
      return state;
  }
};

const UseReducerExercise2 = () => {
  const initialState = { num: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = () => {
    dispatch({ type: 'add', payload: 1 });
  };

  const subtract = () => {
    dispatch({ type: 'subtract', payload: 1 });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0; // Ensure it's a number
    dispatch({ type: 'set', payload: value });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter a number..."
        value={state.num}
        onChange={handleChange}
      />
      <button onClick={add}>Increment</button>
      <button onClick={subtract}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UseReducerExercise2;
