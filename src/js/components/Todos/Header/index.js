import React, {Component} from 'react'
import styles from './index.scss'
import TodoTextInput from '../TodoTextInput'

export default class Header extends Component {

    handleSave = text => {
        if (text.length !== 0) {
            this.props.addTodo(text)
        }
    };

    render() {
        return (
            <header className={`relative ${styles.root}`}>
                <h1 className={styles.title}>Todo List</h1>
                <TodoTextInput
                    newTodo
                    placeholder="add your todo"
                    onSave={this.handleSave}
                />
            </header>
        )
    }
}