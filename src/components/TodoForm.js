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
                props.edit?
                (<form className="col-12 d-flex flex-row text-center" onSubmit={handleSubmit}>
                <input type="text" placeholder="Update a todo" onChange={handleChange} value={input} ref={inputRef} className="form-control w-50" />&nbsp;&nbsp;
                <button className="btn btn-primary col-2">Update</button>
                {/* &nbsp;&nbsp;<span className="btn btn-danger col-2" onClick={handleCancel}>Cancel</span> */}
            </form>) : (<form className="col-12 d-flex flex-row text-center" onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a todo" onChange={handleChange} ref={inputRef} value={input} className="form-control w-50" />&nbsp;&nbsp;
                <button className="btn btn-primary col-2">Save</button>
            </form>)
            }
        </div>
    )
}

export default TodoForm;