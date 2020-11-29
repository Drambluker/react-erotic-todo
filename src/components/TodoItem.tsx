import React from "react";
import Todo from "./Todo";

interface Props {
    todo: Todo;
    onToggle: Function;
    onClose: Function;
}

class TodoItem extends React.Component<Props> {
    state: Readonly<{ checked: boolean }>;

    constructor(props: Props) {
        super(props);
        this.state = {checked: props.todo.completed};
    }

    render() {
        return (
            <li className={this.state.checked ? "checked" : ""}
                onClick={() => {
                    this.setState({checked: !this.state.checked});
                    this.props.onToggle(this.props.todo);
                }}>
                {this.props.todo.title}
                <span className="close" onClick={() => this.props.onClose(this.props.todo)}>
                    {"\u00D7"}
                </span>
            </li>
        );
    }
}

export default TodoItem;
