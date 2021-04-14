import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';


TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
    onDeleteClick: null
}

function TodoList({ danhsach, onTodoClick, onDeleteClick }) {
    // const danhsach = props.danhsach
    // const {danhsach} = props

    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;

        onTodoClick(todo, idx)
    }

    const handleDeleteItem = (todo) => {
        if (!onDeleteClick) return;

        onDeleteClick(todo)
    }

    return (
        <ul className="todo-list">
            {danhsach.map((todo, idx) => (  //Ung voi 1 todo tao ra 1 jsx (dau ngoac tron)
                <li
                    key={todo.id}
                    className={classnames({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}

                >
                    {todo.title}
                    <button onClick={() => handleTodoClick(todo, idx)}>Status</button>
                    <button onClick={() => handleDeleteItem(todo)}>Delete</button>
                </li>

            ))}
        </ul>
    );
}

export default TodoList;