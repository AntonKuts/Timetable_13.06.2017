import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="my-header">
        <h1 className="main_text">Create your plans</h1>
        <p>13.06.2017</p>
        <TodoTextInput newTodo
                       onSave={this.handleSave}
                       placeholder="  What should be done?" />
      </header>
    )
  }
}
