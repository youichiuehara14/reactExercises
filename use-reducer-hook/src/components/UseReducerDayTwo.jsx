import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return { num: state.num + action.payload };
    }
    case 'subtract': {
      return { num: state.num === 0 ? state.num : state.num - action.payload };
    }
    case 'reset': {
      return { num: (state.num = 0) };
    }
  }
};

function UseReducerDayTwo() {
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

  return (
    <>
      <input type="text" placeholder="Enter a Number" value={state.num} />
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default UseReducerDayTwo;
