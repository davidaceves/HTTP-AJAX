import React, { Component } from 'react';
import axios from "axios";
import { NavLink } from "react-router-dom";

import './Friend.css';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: null
          }  
        };
      
    // componentDidMount() {
    //     axios
    //     .get("http://localhost:5000/friends")
    //     .then(response => {
    //       this.setState({ friends: response.data })
    //     })
    //     .catch(err => console.log(err));
    //   }

    // componentDidMount() {
    //     const id  = this.props.match.params.id;
        
    //     this.fetchFriend(id);
    // }

    fetchFriend = id => {
        axios
          .get(`http://localhost:5000/friends/${id}`)
          .then(response => {
            this.setState(() => ({ friend: response.data }));
          })
          .catch(error => {
            console.error(error);
          });
      };

    deleteFriend = () => {
        console.log("Friend deleted");

        axios
            .delete(`http://localhost:5000/friends/${this.props.friend.id}`)
            .then(response => {
                this.props.updateFriends(response.data);
                this.props.history.push("/friends");
            })
            .catch(err => console.log(err));
    };

    // showFriend = event => {
    //     event.preventDefault();
    //     axios 
    //       .get(`http://localhost:5000/friends/${this.props.match.params.id}`)
    //       .then(response => {
    //         this.setState({ friend: response.data} );
    //       })
    //       .catch(err => console.log(err));
    //   }


    render() {
        return (
        
        <div className="friend">
        
            {/* <div>
                <p>name: { this.state.friend.name } </p>
                <p>age:  { this.state.friend.age }</p>
                <p>email: { this.state.friend.email }</p>
            </div> */}
            
            <p>name: { this.props.friend.name } </p>
            <p>age:  {this.props.friend.age }</p>
            <p>email:  {this.props.friend.email }</p>
             
            <span onClick={ this.deleteFriend }>Delete</span>
            <NavLink exact to={`friends/${this.props.friend.id}`}>
                <span onClick={ this.fetchFriend }>Update</span>
            </NavLink>  
        </div>
         );
    }
}

export default Friend;