import React, { useState, useEffect } from 'react';
import '../styles/TodoTasks.css';

const TodoTasks = () => {
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [todos, setTodos] = useState([]);
    const [alertMessage, setAlertMessage] = useState(null);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = () => {
        if (task.trim() === '') {
            showAlertMessage('Please Enter a Task First');
            return;
        }

        const newTodo = {
            id: Math.random().toString(36).substr(2, 9),
            task,
            dueDate: dueDate || 'No due date',
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setTask('');
        setDueDate('');
        showAlertMessage('Added Successfully');
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        showAlertMessage('Successfully Deleted');
    };

    const handleToggleTodoStatus = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleEditTodo = (id) => {
        const todoToEdit = todos.find((todo) => todo.id === id);
        setTask(todoToEdit.task);
        setDueDate(todoToEdit.dueDate === 'No due date' ? '' : todoToEdit.dueDate);
        handleDeleteTodo(id);
    };

    const handleClearAllTodos = () => {
        setTodos([]);
        showAlertMessage('Successfully Cleared');
    };

    const showAlertMessage = (message, type) => {
        setAlertMessage({ message, type });
        setTimeout(() => {
            setAlertMessage(null);
        }, 3000);
    };

    const filterTodos = (status) => {
        setFilter(status);
    };

    const getFilteredTodos = () => {
        switch (filter) {
            case 'pending':
                return todos.filter((todo) => !todo.completed);
            case 'completed':
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <section id='todoSection'>

            <div className="todoContainer rounded-lg border border-black" >
                <header>
                    <h2 className='text-2xl font-bold text-center mb-4 text-black'>Make Todo List</h2>
                    {alertMessage && (
                        <div className={`alert alert-${alertMessage.type} p-2 rounded-md text-center bg-green-400 shadow-lg mb-5 w-full`}>
                            <div>
                                <span>{alertMessage.message}</span>
                            </div>
                        </div>
                    )}
                    <div className="input-section">
                        <input
                            type="text"
                            placeholder="Add Your Tasks . . ."
                            className="bg-white bg-opacity-50 rounded border border-black focus:border-gray-400 focus:bg-gray-100 focus:ring-2 focus:ring-gray-700 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                        <input
                            type="date"
                            className="bg-white bg-opacity-50 rounded border border-black focus:border-gray-400 focus:bg-gray-100 focus:ring-2 focus:ring-gray-700 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out schedule-date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                        <button className="btn btn-secondary add-task-button bg-green-500 hover:bg-green-600   p-2 flex rounded" onClick={handleAddTodo}>
                            <i className="text-black bx bx-plus bx-sm"></i>
                        </button>
                    </div>
                </header>
                <hr className='opacity-10 border border-black my-4' />


                <div className="todos-filter">
                    <select className="dropdown p-2 bg-black text-white rounded" value={filter} onChange={(e) => filterTodos(e.target.value)}>
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button className="bg-red-600 hover:bg-red-700 text-white p-2 delete-all-btn rounded" onClick={handleClearAllTodos}>
                        Delete All
                    </button>
                </div>

                <table className="table w-full bg-green-400 rounded-md">
                    <thead >
                        <tr>
                            <th>Task</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="todos-list-body">
                        {getFilteredTodos().length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center">No task found</td>
                            </tr>
                        ) : (
                            getFilteredTodos().map((todo) => (
                                <tr className="todo-item" key={todo.id}>
                                    <td>{todo.task}</td>
                                    <td className='text-nowrap'>{todo.dueDate}</td>
                                    <td className='text-nowrap'>{todo.completed ? 'Completed' : 'Pending'}</td>
                                    <td className='flex'>
                                        <button className="btn btn-warning btn-sm" onClick={() => handleEditTodo(todo.id)}>
                                            <i id='editBtn' className="bx bx-edit-alt bx-xs rounded`"></i>
                                        </button>
                                        <button className="btn btn-success btn-sm" onClick={() => handleToggleTodoStatus(todo.id)}>
                                            <i className="bx bx-check bx-xs p-2 bg-green-800 text-white rounded"></i>
                                        </button>
                                        <button className="btn btn-error btn-sm" onClick={() => handleDeleteTodo(todo.id)}>
                                            <i className="bx bx-trash bx-xs p-2 bg-red-600 text-white rounded"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </section>

    );
};

export default TodoTasks;
