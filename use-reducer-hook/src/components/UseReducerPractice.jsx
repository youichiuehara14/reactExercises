import { useReducer } from 'react';

const reducer = (count, action) => {
  switch (action.type) {
    case 'plus':
      return { num: count.num + action.payload };
    case 'minus':
      return { num: count.num === 0 ? count.num : count.num - action.payload };
    case 'reset':
      return { num: 0 };
  }
};

const UseReducerPractice = () => {
  const initialState = { num: 0 };
  const [count, dispatch] = useReducer(reducer, initialState);

  const plus = () => {
    dispatch({ type: 'plus', payload: 1 });
  };

  const minus = () => {
    dispatch({ type: 'minus', payload: 1 });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <>
      <input type="text" value={count.num} />
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UseReducerPractice;
