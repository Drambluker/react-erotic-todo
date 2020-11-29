import React from 'react';
import logo from './assets/Bathrobe_Zapp.png';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AppState} from './App';
import reportWebVitals from './reportWebVitals';
import {TodoHeaderStore} from "./components/TodoHeader";
import {TodoListStore} from "./components/TodoList";
import {TodoControlStore} from "./components/TodoControl";

const todoListState: TodoListStore = new TodoListStore();
const appState: AppState = new AppState(
    new TodoHeaderStore(
        new TodoControlStore(
            todoListState,
            "Title..."
        ),
        "React Erotic Todo",
        logo
    ),
    todoListState
);

ReactDOM.render(
    <React.StrictMode>
        <App state={appState}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
