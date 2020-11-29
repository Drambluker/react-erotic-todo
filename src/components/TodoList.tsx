import React from "react";
import {action, autorun, observable} from "mobx";
import TodoItem from "./TodoItem";
import {observer} from "mobx-react";
import Todo from "./Todo";

export class TodoListStore {
    @observable todos: Todo[] = observable.array([]);

    constructor() {
        this.load();
        this.autoSave();
    }

    @action addTodo = (todo: Todo) => {
        this.todos.push(todo);
    }

    @action removeTodo = (todo: Todo) => {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    @action toggleTodo = (todo: Todo) => {
        let thisTodo = this.todos[this.todos.indexOf(todo)];
        if (thisTodo) {
            thisTodo.completed = !thisTodo.completed;
        }
    }

    load() {
        const json = localStorage.getItem("todos");
        if (json) {
            this.todos = observable.array(JSON.parse(json));
        }
    }

    autoSave() {
        autorun(() => localStorage.setItem("todos", JSON.stringify(this.todos)));
    }
}

@observer
class TodoList extends React.Component<{ state: TodoListStore }> {
    state = this.props.state;

    onToggle = (todo: Todo) => {
        this.state.toggleTodo(todo);
    }

    onClose = (todo: Todo) => {
        this.state.removeTodo(todo);
    }

    render() {
        return (
            <ul>
                {this.state.todos.map((todo, index) => {
                    return <TodoItem key={index} todo={todo} onToggle={this.onToggle} onClose={this.onClose}/>
                })}
            </ul>
        );
    }
}

export default TodoList;
