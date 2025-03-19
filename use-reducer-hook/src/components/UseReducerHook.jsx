// 🚀 Flow of useReducer State Update
// 1️⃣ Button Click / Event
// User clicks a button, triggering an event (e.g., onClick={inc}).
// 2️⃣ Function Calls dispatch() with an Action Object
// The function (inc or dec) calls dispatch and sends an action object
// This tells the reducer what kind of update needs to happen.
// 3️⃣ Reducer Function's switch Statement Runs
// The reducer checks action.type to decide how to update the state:
// If type is "inc", it increases num.
// If type is "dec", it decreases num (but keeps it from going below 0).
// 4️⃣ State is Updated & Component Re-renders
// The new state is returned, replacing the old one.
// React automatically re-renders the component with the new count.num value.
// The UI updates, showing the new count.

import { useReducer } from 'react';
const reducer = (state, action) => {
  // The `action` parameter represents the object that we passed to `dispatch()`
  // in the form of { type: "inc", payload: 1 } or { type: "dec", payload: 1 }.

  // The `switch(action.type)` statement checks the `type` property inside
  // the `action` object, which determines how the state should be updated.

  // Since `action` is an object, accessing `action.type` follows normal object
  // property syntax (similar to `dispatch.type` if `dispatch` were an object).
  switch (action.type) {
    case 'inc':
      return { num: state.num + action.payload };
    case 'dec':
      return { num: state.num > 0 ? state.num - action.payload : 0 };
  }
};

const UseReducerHook = () => {
  // `reducer` is the function that manages state updates.
  // `{ num: 0 }` is the initial state, which means `count` starts as { num: 0 }.
  const [count, dispatch] = useReducer(reducer, { num: 0 });

  // The `dispatch` function takes an action object (e.g., { type: "inc", payload: 1 }).
  // When `dispatch` is called, the action object is passed to the `reducer` function,
  // where it is received as the `action` parameter.
  const inc = () => {
    dispatch({ type: 'inc', payload: 1 });
  };

  const dec = () => {
    dispatch({ type: 'dec', payload: 1 });
  };

  return (
    <>
      <input type="text" value={count.num} />
      <br />
      <button onClick={inc}>Click to Increment</button>
      <button onClick={dec}>Click to Decrement</button>
      <button>Click to Reset</button>
    </>
  );
};

export default UseReducerHook;
