import React, {useState, useReducer, useEffect} from 'react';
import {todos, todoReducer} from '../reducers/todoReducer';

export default function Todo() {
 const [todo, setTodo] = useState()
 const [state, dispatch] = useReducer(todoReducer, todos)
 const handleChange = e => {
    setTodo(e.target.value)
 }
 const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', payload: todo})
    setTodo();
 }

 const handleToggle = input => {
     dispatch({type: 'TOGGLE_COMPLETE', payload: input})
 }

 const handleDelete = () => {
     dispatch({type: 'DELETE_COMPLETED', payload: todos})
 }
 return (
     <div className='todo-app'>
         <h1>Todo List</h1>
         <form onSubmit={handleSubmit}>
             <input
         className='todo-form'
         type='text'
         name='todo'
         value={!todo ? '' : todo.item}
         onChange={handleChange}
         />
         <button className='button' type='submit'>Submit</button>
         </form>
         <div className='todo-box'>
             {state.map(todo => (
                <div onClick={()=> handleToggle(todo)} className={!todo.completed ? 'incomplete todo' : 'done todo' }>
                    <p>{todo.item}</p>
                    <p >{!todo.completed ? 'incomplete' : 'complete'}</p>
                </div>
            ))}
         </div>
         
         <button className='button' onClick={handleDelete}>Clear Completed</button>
     </div>
 )
}