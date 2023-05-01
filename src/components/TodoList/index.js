import React, { useState, useEffect } from 'react'
import './style.css'

const TodoList = () => {

    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos)
        }
    }, [])

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (!inputValue) return;
        const newTodo = { id: Date.now(), text: inputValue }
        setTodos([...todos, newTodo])
        setInputValue('')
        localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
    }

    const handleDeleteTodo = (id) => {
        const updateTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updateTodos)
        localStorage.setItem('todos', JSON.stringify(updateTodos));
    }

    return (
        <div className='TodoList'>
            <h1>Todo List </h1>
            <form onSubmit={handleOnSubmit}>
                <input type='text'
                    value={inputValue}
                    onChange={handleOnChange}
                    className="TodoList-input"
                />
                <button type='submit' className="TodoList-button">Add Todo</button>
            </form>
            <ul className="TodoList-todos">
                {todos.map((todo) => (
                    <li key={todo.id} className="TodoList-todo">
                        {todo.text}
                        <button
                            type='submit'
                            className="TodoList-deleteButton"
                            onClick={() => handleDeleteTodo(todo.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList