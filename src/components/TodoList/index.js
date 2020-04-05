import React from 'react';
import ItemList from '../ItemList'
import TodoForm from '../TodoForm'

const style = {
    fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
    textAlign: 'center',
    color: '#2c3e50',
    marginTop: '60px'
};

function TodoList(props) {
    return (
        <div style={style}>
            <h1>Todo List</h1>
            <TodoForm/>
            <ItemList/>
        </div>
    )
}

export default TodoList;

