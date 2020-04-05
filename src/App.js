import React from 'react';
import {createStore} from 'redux';
import reducer from './store/reducers';
import {Provider} from 'react-redux';
import TodoList from './components/TodoList'

const store = createStore(reducer);


function App(props) {
    return (
        <Provider store={store}>
            <TodoList/>
        </Provider>
    )
}


export default App;
