import React, { Component } from "react";
import logo from "./logo.svg";
import reduxLogo from "./redux.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import connect
import { connect } from "react-redux";

// components
import SpeedControl from "../SpeedControl/SpeedControl";
import Passengers from "../Passengers/Passengers";
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={reduxLogo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React Redux</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Speed Control</Link>
                </li>
                <li>
                  <Link to="/passengers">Passengers</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </nav>
          </header>

          <div className="content-container">
            <Route
              exact
              path="/"  render={(props) => (
                <SpeedControl
                  {...props}
                  dispatch={this.props.dispatch}
                  reduxState={this.props.reduxState}
                />
              )}
            />
        
            <Route path="/passengers"  render={(props) => (
              <Passengers
                {...props}
                dispatch={this.props.dispatch}
                reduxState={this.props.reduxState}
              />
            )}
          /> />
            <Route path="/dashboard"  render={(props) => (
              <Dashboard
                {...props}
                dispatch={this.props.dispatch}
                reduxState={this.props.reduxState}
              />
            )}
          />} />
          </div>
        </div>
      </Router>
    );
  }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(App);

// export default App;
