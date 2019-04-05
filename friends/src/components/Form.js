import React from 'react';

function Form (props) {
    return (
       <div>
        <form onSubmit={ props.addFriend }>
            <input value={ props.name } name="name" placeholder="name" onChange={ props.changeHandler }/>
            <input value={ props.age } name="age" placeholder="age" onChange={ props.changeHandler }/>
            <input value={ props.email } name="email" placeholder="email" onChange={ props.changeHandler }/>
            <button type="submit">Add Friend</button>
        </form>
       </div>
    
    )
}

export default Form;