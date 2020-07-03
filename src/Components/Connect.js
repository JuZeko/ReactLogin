import React, {Component} from 'react';
import {REALUSERS} from '../important/realUsers';
import { BrowserRouter as Router, Link, Route, Switch, Red, withRouter  } from 'react-router-dom'
import Auth from '../Auth'
import Main from './Main'

class Connect extends Component {

  constructor(props){
    super(props);
    this.state = {name:"",password:"",users:REALUSERS};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.check = this.check.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value })
  }

   handleChangePassword(event) {
    this.setState({ password: event.target.value })
  }

  handleSubmit(event) {

    this.state.users.map((index) => this.check(index.name,index.password))
    event.preventDefault();
  }

  check(indexName,indexPassword){   
  if(indexName === this.state.name && indexPassword === this.state.password){
    alert("Huray");
      Auth.authenticate();
    
    }
  }
  
  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
      Name:
      <div> <input type="text" value={this.state.name} onChange={this.handleChangeName}/> </div>
      Password:
      <div> <input type="password" value={this.state.password} onChange={this.handleChangePassword}/> </div>
      <input type="submit" value="Submit"/>
      </form>
      </div>
      )
  }
}
export default Connect;
