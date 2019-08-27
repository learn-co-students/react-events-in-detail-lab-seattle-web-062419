// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {

  handleClick = (e) => {
    e.persist()
    setTimeout(()=>{
        this.props.onDelayedClick(e);
    }, this.props.delay);
  }
  render() {
      return (
          <button onClick={this.handleClick}>Delayed</button>
      )
  }
}


export default DelayedButton;