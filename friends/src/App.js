import React, { Component } from 'react';
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import axios from "axios";

import './App.css';
import Friends from './components/Friends';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: "",
        age: "",
        email: ""
      }  
    };
  }

  updateFriends = newFriends => {
    this.setState({ friends: newFriends });
  };

  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      this.setState({ friends: response.data })
    })
    .catch(err => console.log(err));
  }

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({
      friend: { ...prevState.friend, [e.target.name]: e.target.value}
    }));
  };

  addFriend = event => {
    event.preventDefault();
    axios 
      .post("http://localhost:5000/friends", this.state.friend)
      .then(response => {
        this.setState({ friends: response.data} );
        this.state.history.push("/");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/friends">
          Friends
        </NavLink>
        <Route path="/friends" render={props => <Friends {...props} friends={ this.state.friends } updateFriends={ this.updateFriends }/>} /> 
        <Form addFriend={ this.addFriend } changeHandler={ this.changeHandler } name={ this.state.friend.name } age={ this.state.friend.age } email={ this.state.friend.email }  />
      </div>
    );
  }
}

export default App;
