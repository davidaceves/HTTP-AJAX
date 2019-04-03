import React, { Component } from 'react';
import { BrowserRouter as Route } from "react-router-dom";
import axios from "axios";

import './App.css';
import Friends from './components/Friends';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""

    };
  }

  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      this.setState({ friends: response.data })
    })
    .catch(err => console.log(err));
  }

  nameHandler = event => {
    this.setState({ name: event.target.value });
  };

  ageHandler = event => {
    this.setState({ age: event.target.value });
  };

  emailHandler = event => {
    this.setState({ email: event.target.value });
  };

  addFriend = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        friends: [
          ...prevState.friends, 
          {
            name: prevState.name,
            age: prevState.age,
            email: prevState.email
          }
        ]
      } 
    })
  }

  render() {
    return (
      <div className="App">
        <Friends friends={ this.state.friends } />
        <Form addFriend={ this.addFriend } nameHandler={ this.nameHandler } ageHandler={ this.ageHandler } emailHandler={ this.emailHandler } name={ this.state.name } age={ this.state.age } email={ this.state.email }  />
      </div>
    );
  }
}

export default App;
