import React from 'react';

function Form (props) {
    return (
       <div>
        <form onSubmit={ props.addFriend }>
            <input value={ props.name } placeholder="name" onChange={ props.nameHandler }/>
            <input value={ props.age } placeholder="age" onChange={ props.ageHandler }/>
            <input value={ props.email } placeholder="email" onChange={ props.emailHandler }/>
            <button type="submit">Add Friend</button>
        </form>
       </div>
    
    )
}

export default Form;