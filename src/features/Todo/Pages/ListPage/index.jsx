import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import queryString from 'query-string';
import { useHistory, useLocation, useRouteMatch } from 'react-router';

ListPage.propTypes = {

};

function ListPage(props) {
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

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);

    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        console.log(params)
        return params.status || 'all';
    })

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || 'all');
    }, [location.search])

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
        // setFilteredStatus('all')
        const queryParams = { status: 'all' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const handleShowCompletedCLick = () => {
        // setFilteredStatus('completed')
        const queryParams = { status: 'completed' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const handleShowNew = () => {
        // setFilteredStatus('new')
        const queryParams = { status: 'new' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    //Tao list moi dc filter
    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    }, [todoList, filteredStatus])
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

export default ListPage;