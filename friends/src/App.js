import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

 
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends : response.data })
        })
        .catch(err => {
            console.log(err)
        })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}



  export default withRouter(App);
