import { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { num: state.num + action.payload };
    case 'subtract':
      return { num: state.num === 0 ? state.num : state.num - action.payload };
    case 'reset':
      return { num: 0 };
    default:
      return state;
  }
};

const UseReducerFinal = () => {
  const initialState = { num: 0 };

  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const storedState = localStorage.getItem('state');
    return storedState ? JSON.parse(storedState) : initial;
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  const add = () => {
    dispatch({ type: 'add', payload: 1 });
  };

  const subtract = () => {
    dispatch({ type: 'subtract', payload: 1 });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <>
      <input type="text" placeholder="Enter a number..." value={state.num} readOnly />
      <button onClick={add}>add</button>
      <button onClick={subtract}>subtract</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default UseReducerFinal;
