import React from 'react';
import {connect} from 'react-redux';
import TodoItem from '../TodoItem';
import {todoDone, deleteTodo} from "../../store/NoteList/actions";

function TodoList(props) {
    const {todos, todoDone, deleteTodo} = props;

    const todoList = todos.map((todo, index) => (
        <TodoItem todo={todo} todoDone={todoDone} index={index} deleteTodo={deleteTodo} key={todo.id}/>
    ));
    return (
        <div>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {todoList.length ? todoList : 'Задач нет, добавьте первую'}
            </ul>
        </div>
    )
}

const putStateToProps = (state) => {
    return {
        todos: state.list.todos
    }
};

const putActionToProps = {
    todoDone, deleteTodo
};


export default connect(putStateToProps, putActionToProps)(TodoList);

