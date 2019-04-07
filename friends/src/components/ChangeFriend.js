import React, { Component } from 'react';

class ChangeFriend extends Component {
    constructor(props) {
      super(props);
      this.state = {
        friend: {
          name: "",
          age: "",
          email: ""
        }  
      };
    }

    updateHandler = e => {
      e.persist();
      this.setState(prevState => ({
        friend: { ...prevState.friend, [e.target.name]: e.target.value}
      }));
    };


    render() {
      return (
        
        <div>
        <form onSubmit={ this.props.changeFriend('1', this.state.friend) }>
            <input value={ this.state.name } name="name" placeholder="name" onChange={ this.updateHandler }/>
            <input value={ this.state.age } name="age" placeholder="age" onChange={ this.updateHandler }/>
            <input value={ this.state.email } name="email" placeholder="email" onChange={ this.updateHandler }/>
            <button type="submit">Update Friend</button>
        </form>
       </div>
        
      );
    }
  }

export default ChangeFriend;