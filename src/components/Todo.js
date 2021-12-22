import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti'
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

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete? 'item w-75 d-flex flex-row justify-content-between complete' : 'item w-75 d-flex flex-row justify-content-between'} key={index}>
            <div key={index} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            <div className='icons'>
                <span className="delete btn btn-info d-inline-flex justify-content-center align-content-center" onClick={() => setEdit({id: todo.id, value: todo.text })}>
                    <span>Edit</span>&nbsp;
                    <span><RiCloseCircleLine /></span>    
                </span>&nbsp;&nbsp;
                <span className="edit btn btn-danger d-inline-flex justify-content-center align-content-center" onClick={() => removeTodo(todo.id)}>
                    <span>Delete</span>&nbsp;
                    <span><TiEdit /></span>
                </span>
            </div>
        </div>
    ))
}

export default Todo;