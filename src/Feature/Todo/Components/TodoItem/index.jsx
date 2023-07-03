import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Style.scss';
 
TodoItem.propTypes = {
    item: PropTypes.any,
    onTodoClick: PropTypes.func,
};

function TodoItem(props) {
    const {item, onTodoClick} = props;
    
    const handleItemClick = (item) => {
        if(!onTodoClick){console.log(false); return;}
        
        onTodoClick(item);
    };
    
    return (
        <li 
            className={classNames({TodoItem: true,Done: item.state === "Done"})}
            onClick={() => handleItemClick(item)}
        >{item.content}</li>
    );
}   

export default TodoItem;