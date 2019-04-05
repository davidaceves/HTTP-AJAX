import React from 'react';
import { Route, Link } from "react-router-dom";

import Friend from './Friend';

function Friends (props) {
    return (
       <div>
       { props.friends.map(friend => {
         return  <Link exact to={`/friends/${ friend.id }`}> <Route render={props => (<Friend {...props}  updateFriends={ props.updateFriends } friend={ friend } />) } /></Link>
        }) }    
       </div>
    
    )
}

export default Friends;