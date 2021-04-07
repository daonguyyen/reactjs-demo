import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';


TodoList.propTypes = {
    todoList : PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList({danhsach, onTodoClick}) {
    // const danhsach = props.danhsach
    // const {danhsach} = props

    const handleTodoClick = (todo, idx) => {
        if(!onTodoClick) return ;

        onTodoClick(todo, idx)
    }

    return (
        <ul className="todo-list">
            {danhsach.map((todo, idx) => (  //Ung voi 1 todo tao ra 1 jsx (dau ngoac tron)
                <li 
                    key={todo.id} 
                    className={classnames({ 
                        'todo-item' : true,
                        completed : todo.status === 'completed'
                    })}
                    onClick={() => handleTodoClick(todo, idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;