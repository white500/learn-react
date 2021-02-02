import React, { Component } from 'react'

class TodoListItem extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content } = this.props.currentIndex;
        return (
            <li onClick={this.handleClick}>{ content }</li>
        )
    }

    handleClick() {
        const { currentIndex } = this.props.currentIndex;
        this.props.currentItemDelete(currentIndex);
    }
}

export default TodoListItem
