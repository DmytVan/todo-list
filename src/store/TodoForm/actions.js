export const ADD_TODO = 'ADD_TODO';
export const CHANGE_TEXT = 'CHANGE_TEXT';

export const addTodo = (todoValue) => (
    {
        type: ADD_TODO,
        todoValue
    }
);


export const changeText = (newText) => (
    {
        type: CHANGE_TEXT,
        newText
    }
);
