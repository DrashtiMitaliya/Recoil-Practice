import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from './atom';

export default function TodoList() {
    const todoList = useRecoilValue(todoListState);

    return (
        <div className='container  mt-5 p-5 '>
            {todoList.length !== 0 ? todoList.map((todo, index) => (
                <div className='m-1 p-3 bg-primary text-light rounded border' key={todo.id}>{index + 1}. {todo.text}</div>
            ))
                : <div className='m-1 p-3 bg-primary text-light rounded border' >No task </div>
            }
        </div>
    );
}
