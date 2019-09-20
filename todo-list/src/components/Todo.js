import React, {useState, useReducer} from 'react';
import {todos, todoReducer} from '../reducers/todoReducer';

export default function Todo() {
 const [todo, setTodo] = useState()
 const [state, dispatch] = useReducer(todoReducer, todos)
 const handleChange = e => {
    setTodo(e.target.value)
 }
 return (
     <div>
         <h1>Todo List</h1>
         <form onSubmit={e=> {
             e.preventDefault();
             dispatch({type: 'ADD_TODO', payload: todo})
             console.log(state)
         }}>
             <input
         className='todo-form'
         type='text'
         name='todo'
         value={!todo ? '' : todo.item}
         onChange={handleChange}
         />
         <button className='submit-form' type='submit'>Submit</button>
         </form>
         
         {state.map(todo => (
            <div className={!todo.completed ? 'incomplete todo' : 'done todo'}>
                <p>{todo.item}</p>
                <p >{!todo.completed ? 'incomplete' : 'done'}</p>
            </div>
            
         ))}
     </div>
 )
}