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
      friend: {
        name: "",
        age: "",
        email: ""
      }  
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

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({
      friend: { ...prevState.friend, [e.target.name]: e.target.value}
    }));
  };

  // nameHandler = event => {
  //   this.setState({ name: event.target.value });
  // };

  // ageHandler = event => {
  //   this.setState({ age: event.target.value });
  // };

  // emailHandler = event => {
  //   this.setState({ email: event.target.value });
  // };

  addFriend = event => {
    event.preventDefault();
    axios 
      .post("http://localhost:5000/friends", this.state.friend)
      .then(response => {
        console.log(response.data)
        this.setState({ friends: response.data} );
        // this.history.push("/");
      })
      .catch(err => console.log(err));
    // this.setState(prevState => {
    //   return {
    //     friends: [
    //       ...prevState.friends, 
    //       {
    //         name: prevState.name,
    //         age: prevState.age,
    //         email: prevState.email
    //       }
    //     ],
    //     name: "",
    //     age: "",
    //     email: ""
    //   } 
    // })
  }

  render() {
    return (
      <div className="App">
        <Friends friends={ this.state.friends } />
        <Form addFriend={ this.addFriend } changeHandler={ this.changeHandler } name={ this.state.friend.name } age={ this.state.friend.age } email={ this.state.friend.email }  />
      </div>
    );
  }
}

export default App;
