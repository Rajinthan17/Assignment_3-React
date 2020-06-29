import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import BottomBar from './Components/BottomBar';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLogIn : false
    }
  }

  changeLoginStatus() {
    this.setState (
      {
        isLogIn :true
      }
    )
  }
  changeLogoutStatus() {
    this.setState (
      {
        isLogIn :false
      }
    )
  }
  render(){
    return (
      <div>
        <NavBar isLogIn = {this.state.isLogIn}/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
