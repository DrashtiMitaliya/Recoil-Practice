import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './atom';


export default function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id: Date.now(), text: inputValue, isComplete: false },
    ]);
    setInputValue('');
  };

  return (
    <div className="container mt-5">
        <form className='w-50' onSubmit={handleSubmit} >
      <input
      className='mx-4'
      placeholder='Enter Task Title'
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button className='btn btn-primary' type="submit">Add Todo</button>
    </form>
    </div>
  );
}
