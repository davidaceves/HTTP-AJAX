import React from 'react';
import axios from "axios";
import { NavLink } from "react-router-dom";

import './Friend.css';

function Friend (props) {

    const deleteFriend = () => {
        console.log("Friend deleted");

        axios
            .delete(`http://localhost:5000/friends/${props.friend.id}`)
            .then(response => {
                props.updateFriends(response.data);
                props.history.push("/friends");
            })
            .catch(err => console.log(err));
    };


    return (
        
        <div className="friend">
        
            <p>name: { props.friend.name } </p>
            <p>age:  {props.friend.age }</p>
            <p>email:  {props.friend.email }</p> 
            <span onClick={ deleteFriend }>Delete</span>
            <NavLink exact to={`friends/${ props.friend.id }`}>
                <span onClick={ props.changeFriend(props.friend.id, 'hello') }>Update</span>
            </NavLink>  
        </div>
    )
}

export default Friend;