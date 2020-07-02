import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import BottomBar from './Components/BottomBar';

class App extends Component {
  constructor(props){
    super(props)
  }

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