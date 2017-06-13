import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {

  static propTypes = {
      clearCompleted: PropTypes.func.isRequired
    }

handleСlearCompleteClick = () => {
  this.props.clearCompleted();
}

  render() {
    return (
      <footer className="footer">
        <button onClick={this.handleСlearCompleteClick}  type="button" name="button">Close all</button>
      </footer>
    )
  }
}
