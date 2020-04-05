import {ADD_TODO} from "../TodoForm/actions";
import {TODO_DONE, DELETE_TODO} from "./actions";

const initialState = {
    todos: [],
    lastId: 0
};

const reducer = (state = initialState, action) => {
    let index, newTodos;
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos:[...state.todos, {value: action.todoValue, id: state.lastId, isDone: false}], lastId: state.lastId+1};
        case TODO_DONE:
            index = state.todos.indexOf(action.note);
            newTodos = [...state.todos];
            newTodos[index].isDone = !newTodos[index].isDone;
            return {...state, todos:[...newTodos]};
        case DELETE_TODO:
            index = state.todos.indexOf(action.note)
            newTodos = [...state.todos];
            newTodos.splice(index, 1)
            return {...state, todos:[...newTodos]};
        default:
            return state
    }
};


export default reducer;