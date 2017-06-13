
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'


export default class TodoItem extends Component {

  static propTypes = {
      todo: PropTypes.object.isRequired,
      completeTodo: PropTypes.func.isRequired,
      deleteTodo: PropTypes.func.isRequired
    }

    handleCompleteClick = () => {
    this.props.completeTodo(this.props.todo.id);
  }

  handleDeleteClick = () => {
  this.props.deleteTodo(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;
    return (

        <div className={classnames({ none: todo.delete})}>
          <div className="box">
            <input onClick={this.handleCompleteClick} className="input2" type="checkbox" name="" value="" />
              <div className="box2">
                <h5  className={'task_style ' + classnames({completed: todo.completed})} >{todo.text}</h5>
              </div>
              <p className="p_style">item.time</p>
              <button className="button_style" type="button" name="button">Start</button>
              <a href="#" className="a_style" onClick={this.handleDeleteClick}><img src="https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_close-20.png" alt=""/></a>
            </div>
        </div>
)}
}
