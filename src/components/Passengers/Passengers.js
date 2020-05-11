import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
state = {
    passenger: "",
}
handleChange = (event, property) => {
    console.log("in handlechange");
    if (property === "comments")
      this.setState({
        [property]: event.target.value,
      });
  };
    handleClick = (event, property) => {
        console.log("in handleClick");
       
        this.props.dispatch({ type: "passenger", payload: this.state.passenger });
      };
  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange={(event) => this.handleChange(event, "comments")} />
        <button onClick={this.handleClick}>Add Passenger</button>

        <ul>PASSENGER LIST: GOES HERE</ul>
     
      </div>
    )
  }
}

export default Passengers;