import noteListReducer from './NoteList/reducer';
import todoFormReducer from './TodoForm/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    form: todoFormReducer,
    list: noteListReducer
});
