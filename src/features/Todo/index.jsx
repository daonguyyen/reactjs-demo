import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },
    ]

    const [todoList, setTodoList] = useState(initTodoList);

    const [filteredStatus, setFilteredStatus] = useState('all')

    const handleTodoClick = (todo, idx) => {
        //clone current array to the new one
        const newTodoList = [...todoList]
        console.log(todo, idx)
        //toggle state
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }
        newTodoList[idx] = newTodo

        //update todolist
        setTodoList(newTodoList)
    }

    //Delete item
    const handleDeleteTodo = (todo) => {
        const index = todoList.findIndex(x => x.id === todo.id)
        if (index < 0) return;

        const newTodoDelete = [...todoList]
        console.log(index)
        newTodoDelete.splice(index, 1)
        setTodoList(newTodoDelete)

    }
    //Add item to list
    const handleTodoFormSubmit = (formValues) => {
        console.log(formValues)
        //add new todo to current todo list
        const newtodo = {
            id: todoList.length + 1,
            ...formValues
        }
        const newTodoList = [...todoList]
        newTodoList.push(newtodo)
        setTodoList(newTodoList)
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all')
    }
    const handleShowCompletedCLick = () => {
        setFilteredStatus('completed')
    }
    const handleShowNew = () => {
        setFilteredStatus('new')
    }

    //Tao list moi dc filter
    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
    // console.log(renderedTodoList)
    return (
        <div>
            <h3>Todo List</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <TodoList danhsach={renderedTodoList} onTodoClick={handleTodoClick} onDeleteClick={handleDeleteTodo} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedCLick}>Show Completed</button>
                <button onClick={handleShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;