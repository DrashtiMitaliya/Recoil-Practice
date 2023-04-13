import React from 'react'
// import { useRecoilState } from 'recoil'
// import { counter } from './atom'
import TodoList from './TodoList'
import TodoInput from './TodoInput';
import './App.css'
const App = () => {



  return (
    <div className='container'>
 

      <TodoInput/>
      <TodoList/>
    
    </div>
  )
}

export default App