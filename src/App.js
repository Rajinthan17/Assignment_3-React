import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import BottomBar from './Components/BottomBar';

class App extends Component {
  constructor(props){
    super(props)
  }
//If you want to see the Admin Board please go to login.js(Source Code) and change role as 'ADMIN'
//If you want to see the Book Update please go to Book list in the UI and then click the icon near to the deleted icon
  render(){
    return (
      <div>
        <NavBar/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;