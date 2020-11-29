import React from 'react';
import './App.css';
import TodoHeader, {TodoHeaderStore} from "./components/TodoHeader";
import TodoList, {TodoListStore} from "./components/TodoList";
import {observer} from "mobx-react";
import {observable} from "mobx";

export class AppState {
    @observable todoHeaderState: TodoHeaderStore;
    @observable todoListState: TodoListStore;

    constructor(todoHeaderState: TodoHeaderStore, todoListState: TodoListStore) {
        this.todoHeaderState = todoHeaderState;
        this.todoListState = todoListState;
    }
}

@observer
class App extends React.Component<{ state: AppState }> {
    render() {
        let state = this.props.state;
        return (
            <>
                <TodoHeader store={state.todoHeaderState}/>
                <TodoList state={state.todoListState}/>
            </>
        )
    }
}

export default App;
