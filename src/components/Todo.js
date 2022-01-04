import React, { useState } from 'react';
import { TiEdit, TiInputChecked } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';
import TodoForm from './TodoForm';

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)

        setEdit({
            id: null,
            value: ''
        });
    };

    function CompletedTodos() {
        return (
            todos.map((todo, index) => (
                todo.isComplete ?
            <div className="todoItem" key ={ index}  >
                <div>
                <TiInputChecked onClick={() => completeTodo(todo.id)}/> {todo.text}
                </div>
                <div className="btns"> <RiCloseCircleLine onClick={() => removeTodo(todo.id)}/> </div>
            </div>
            : <div></div>))
        )
    }

    function Todos(){
        return(
            todos.map((todo, index) => 
             ( !todo.isComplete ?
           <div className="todoItem" key={index}>
          
                <div>  <TiInputChecked onClick={() => completeTodo(todo.id)}/> {todo.text}</div>
              
            <div className="btns"> <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text })}/> <RiCloseCircleLine onClick={() => removeTodo(todo.id)}/> </div>
            
                   
                </div> : '')
        )
        )
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <div>
            <div>
                <div className="header">Task</div> 
      
            </div>
            <Todos/>
            <div className="header">Completed</div> 
            <CompletedTodos/>
        </div>
       
    )
}

export default Todo;