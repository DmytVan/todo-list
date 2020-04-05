import {CHANGE_TEXT} from "./actions";
import {ADD_TODO} from "./actions";

const initialState = {
    text: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return {...state, text: action.newText};
        case ADD_TODO:
            return {...state, text: ''}
        default:
            return state
    }
};

export default reducer;

