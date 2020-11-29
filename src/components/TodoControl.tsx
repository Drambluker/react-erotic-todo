import React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import {TodoListStore} from "./TodoList";

export class TodoControlStore {
    @observable todoListStore: TodoListStore;

    @observable placeholderTitle?: string;

    constructor(todoListStore: TodoListStore, placeholderTitle?: string) {
        this.todoListStore = todoListStore;
        this.placeholderTitle = placeholderTitle;
    }
}

@observer
class TodoControl extends React.Component<{ store: TodoControlStore }> {
    store = this.props.store;
    inputRef = React.createRef<HTMLInputElement>();

    addTodo = () => {
        let title = "";

        if (this.inputRef.current) {
            title = this.inputRef.current.value;
            this.inputRef.current.value = "";
        }

        if (title === "") {
            alert("You must write something!");
            return;
        }

        this.store.todoListStore.addTodo({
            title: title,
            completed: false
        })
    }

    render() {
        return (
            <>
                <input ref={this.inputRef} type="text" id="todoInput"
                       placeholder={this.store.placeholderTitle ? this.store.placeholderTitle : "Title..."}/>
                <span className="addBtn"
                      onClick={this.addTodo}>
                    Add
                </span>
            </>
        );
    }
}

export default TodoControl;
