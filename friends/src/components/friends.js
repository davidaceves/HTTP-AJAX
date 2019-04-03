import React from 'react';

import Friend from './Friend';

function Friends (props) {
    return (
       <div>
       { props.friends.map(friend => {
         return <Friend friend={ friend }/>
        }) }    
       </div>
    
    )
}

export default Friends;