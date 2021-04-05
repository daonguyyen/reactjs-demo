import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList : PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList({danhsach}) {
    // const danhsach = props.danhsach
    // const {danhsach} = props
    return (
        <ul>
            {danhsach.map(todo => (  //Ung voi 1 todo tao ra 1 jsx (dau ngoac tron)
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;