import React from 'react';
import { Route, NavLink } from "react-router-dom";

import Friend from './Friend';

function Friends (props) {
    return (
       <div>
       { props.friends.map(friend => {
         return  <Route exact path="/friends/:id" render={props => <Friend {...props} updateFriends={ props.updateFriends } friend={ friend } />}/> 
        }) }    
       </div>
    
    )
}

export default Friends;