import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      // syntax of filter is (element, index, array)
      return state.filter((_, idx) => idx !== action.payload);
  }
};

const TodoApp = () => {
  const [todo, setTodo] = useState('');

  const [task, dispatch] = useReducer(reducer, []);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', payload: todo });
  };

  const delTodo = (index) => {
    dispatch({ type: 'DELETE', payload: index });
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center gap-5 ">
      {/* FORM INPUT ADD TASK */}
      <form className="flex mt-10 w-[600px]" onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter a new task..."
          name="todo"
          value={todo}
          className="border-1 border-[#015665] inset-shadow-sm ring-[#015665] outline-0 
          inset-shadow-[#015665] flex text-[#19fff3]  
          flex-1 px-2 py-1"
          onChange={handleTodo}
        />
        <button className="border-1 border-[#015665] inset-shadow-sm ring-[#015665] inset-shadow-[#015665]  px-5 py-1  ">
          Add Task
        </button>
      </form>
      {/* FORM INPUT ADD TASK */}

      {/* RENDER LIST */}
      <div className="w-[600px] h-[700px] relative ">
        <div className="w-full h-full border-1 border-[#aeeaf5]/20">
          <ul>
            {task.map((item, index) => {
              return (
                <li key={index} className="mb-5">
                  <span>{item}</span>
                  <button className="border-1 px-2 ml-5" onClick={() => delTodo(index)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* RENDER LIST */}
    </div>
  );
};

export default TodoApp;
