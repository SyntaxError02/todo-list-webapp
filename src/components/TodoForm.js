import React, { useState, useEffect, useRef } from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    // const handleCancel = () => {
    //     console.log('jeele')
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }

    return (
        <div className="row">
            {
                props.edit ==="undefined"?
                (<form className="todoForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="Update a todo" onChange={handleChange} value={input} ref={inputRef} className="inputForm" />&nbsp;&nbsp;
            </form>) : (<form className="todoForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a todo" onChange={handleChange} ref={inputRef} value={input} className="inputForm" />&nbsp;&nbsp;
            </form>)
            }
        </div>
    )
}

export default TodoForm;