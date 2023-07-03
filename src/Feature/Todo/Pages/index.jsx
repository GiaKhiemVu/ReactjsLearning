import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../Components/TodoList';

TodoPages.propTypes = {
    
};

function TodoPages(props) {
    const initTodoLists = [
        {
            id: 1,
            content: 'Tap',
            state: 'Done',
        },
        {
            id: 2,
            content: 'Spray',
            state: 'NotDone',
        },
        {
            id: 3,
            content: 'Tranfer',
            state: 'NotDone',
        },
        {
            id: 4,
            content: 'Kill',
            state: 'NotDone',
        }
    ];

    const [TodoLists, setTodoList] = useState(initTodoLists);
    const [QueryCondition, setQueryList] = useState('All');

    const handleItemClick = (item) => {
        console.log(item)
        //Clone
        const newTodoList = [...TodoLists];

        //Change State
        newTodoList[item.id-1].state = newTodoList[item.id-1].state === 'Done'? 'NotDone' : 'Done';

        //set state
        setTodoList(newTodoList);
    }

    const handleAllButton = () => {
        setQueryList('All');

    }

    const handleDoneButton = () => {
        setQueryList('Done');
    }

    const handleNotDoneButton = () => {
        setQueryList('NotDone');
    }

    const queryItems = TodoLists.filter(item => QueryCondition === 'All' || QueryCondition === item.state);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList TodoList={queryItems} onTodoClick={handleItemClick}></TodoList>
            <div className='MenuButton'>
                <button onClick={handleAllButton}>All</button>
                <button onClick={handleDoneButton}>Done</button>
                <button onClick={handleNotDoneButton}>NotDone</button>
            </div>
        </div>
    );
}

export default TodoPages;