import React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import TodoControl, {TodoControlStore} from "./TodoControl";

export class TodoHeaderStore {
    @observable todoControlStore: TodoControlStore;
    @observable logo?: string;
    @observable title?: string;

    constructor(todoControlState: TodoControlStore, title?: string, logo?: string) {
        this.todoControlStore = todoControlState;
        this.logo = logo;
        this.title = title;
    }
}

@observer
class TodoHeader extends React.Component<{ store: TodoHeaderStore }> {
    store = this.props.store;

    render() {
        return (
            <div className="header">
                {this.store.logo &&
                <img src={this.store.logo} alt={"Logo"}/>
                }
                {this.store.title &&
                <h2>{this.store.title}</h2>
                }
                <TodoControl store={this.store.todoControlStore}/>
            </div>
        );
    }
}

export default TodoHeader;
