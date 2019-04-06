import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

class ChangeFriend extends Component {
    constructor() {
      super();
      this.state = {
        friend: {
          name: "",
          age: "",
          email: ""
        }  
      };
    }

    updateHandler = e => {

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
            <Route exact path="/friends" render={props => <Friends {...props} friends={ this.state.friends } updateFriends={ this.updateFriends } changeFriend={ this.changeFriend }/>} /> 
            <Form addFriend={ this.addFriend } changeHandler={ this.changeHandler } name={ this.state.friend.name } age={ this.state.friend.age } email={ this.state.friend.email }  />
            
          </div>
        
      );
    }
  }

export default ChangeFriend;