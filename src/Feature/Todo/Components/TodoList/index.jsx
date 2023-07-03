import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';
import TodoItem from '../TodoItem';

TodoList.propTypes = {
    TodoList: PropTypes.array,
};

TodoList.defaultProps = {
    TodoList: [],
}

function TodoList(props) {
    const {TodoList, onTodoClick} = props;

    return (
        <ul className='TodoList'>
            {TodoList.map(item => ( 
                <TodoItem key={item.id} item={item} onTodoClick={onTodoClick}></TodoItem>
            ))}
        </ul>
    );
}

export default TodoList;