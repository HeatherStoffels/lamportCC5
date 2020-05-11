import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY
import { connect } from "react-redux";

class SpeedControl extends Component {

    state = {
        speed: 0
    }

    clickHandler = (event, property)=>{
        console.log('in click handler', event, property);
        let currentSpeed = Number(this.state.speed);
        if (property === 'speedUp') {
            this.setState ({
                speed: currentSpeed + 1
            })
            this.props.dispatch({ type: 'speedUp', payload: 1})
        }else if ( property === 'slowDown'){
            this.setState ({
                speed: this.state.speed - 1
            })
            this.props.dispatch({ type: 'slowDown', payload: 1})
        }
        

    }
  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={(event) => this.clickHandler (event, 'speedUp')}>Increase Speed</button>
        <p>SPEED: {this.props.reduxState}</p>
        <button onClick={(event) => this.clickHandler (event, 'slowDown')}>Decrease Speed</button>
      </div>
    )
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(SpeedControl);
// export default SpeedControl;