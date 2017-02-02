import React from 'react'
import ReactDom from 'react-dom'

class Bomb extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render(){
    let message
      if (this.props.initialCount === 0){
        message = <h1>Boom!</h1>
      } else {
        message = <h1>{this.props.initialCount} seconds left before I go boom!</h1>
      }
    return (
      <div>
        {message}
      </div>
    )

  }

}

Bomb.defaultProps = {
  initialCount: 0
}

Bomb.propTypes = {
  initialCount: React.PropTypes.number.isRequired
}

module.exports = Bomb
