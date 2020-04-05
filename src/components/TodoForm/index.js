import React from 'react';
import {connect} from 'react-redux';
import {changeText} from "../../store/TodoForm/actions.js";
import {addTodo} from "../../store/TodoForm/actions";
import {useEffect, useRef} from  'react';

function TodoForm(props) {
    const {text, changeText, addTodo} = props;
    const input = useRef(null);

    useEffect(() => {
        console.log(111);
        input.current.focus();
    }, []);

    return (
        <form style={{padding: '10px'}}>
            <input ref={input} style={{width: '50%', marginRight: '20px'}} type='text' value={text} onChange={(event) => {
                changeText(event.target.value)
            }} placeholder={'enter new thing'}/>
            <button onClick={(e) => {
                e.preventDefault();
                if (text.trim()) {
                    addTodo(text.trim())
                }
            }}>Create
            </button>
        </form>
    )
}


const setStateToProps = (state) => {
    return {
        text: state.form.text
    }
};

const putActionsToProps = {
    changeText,
    addTodo
}

export default connect(setStateToProps, putActionsToProps)(TodoForm);

