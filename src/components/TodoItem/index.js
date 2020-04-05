import React from 'react';
import './index.css'


function TodoItem(props) {
    const {todo: thisTodo, todoDone, index, deleteTodo} = props;
    const item = thisTodo.isDone ? <span className={'done'}>{index + 1}. {thisTodo.value}</span> : <span>{index + 1}. {thisTodo.value}</span>
    return (
        <li>
            <span><input type="checkbox" checked={thisTodo.isDone} onChange={() => {
                todoDone(thisTodo)
            }}/>
                {item}
            </span>
            <button className="removeBtn" onClick={()=> {deleteTodo(thisTodo)}}>&times;</button>
        </li>
    )
}

export default TodoItem