import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import AddBook from './AddBook';
import BookList from './BookList';
import Admin from './Admin';
import AddUser from './AddUser';
import ViewUser from './ViewUser';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(3),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor:'#263238',
      color: 'white'
    },
    Button: {
      backgroundColor:'#263238',
      color: 'white'
    }
  }));

function NavBar(props){
    const classes = useStyles()
    if(localStorage.getItem('roles') == "ADMIN"){
    var Board = localStorage.getItem('roles')
    }
    const LogOut = () => {
      localStorage.clear()
    }
    return(
        <React.Fragment>
          <Router>
          <AppBar position="static" className={classes.appBar}>
              <Toolbar>
                  <LibraryBooksIcon fontSize = "large"/>
                  <Typography  className={classes.title}>
                      Books Shop
                      <Button href = "/" className={classes.Button}>Home</Button>
                      {Board ? (
                        <Button href = "/admin" className={classes.Button}>Admin Board</Button>
                      ):
                      (<>{localStorage.getItem('username') && (
                        <>
                          <Button href = "/add_book" className={classes.Button}>Add Book</Button>
                          <Button href = "/book_list" className={classes.Button}>Book List</Button>
                        </>
                      )}</>)
                    }
                  </Typography>
                {localStorage.getItem('username') ? 
                  (<><AccountCircleIcon fontSize = "large" align = 'center'/> 
                <Typography>{localStorage.getItem('username')}</Typography>
                  <Button href = "/" className={classes.Button} onClick = {LogOut} >Logout</Button>
                  </>):
                  (<div><Button href = "/login" className={classes.Button} >Login</Button>
                  <Button href = '/register' className={classes.Button} >Signup</Button></div>)}
              </Toolbar>
          </AppBar>
          <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path={'/register'} component={Signup} />
              <Route exact path={'/login'} component={Login} />
              <Route exact path={'/profile'} component={Profile}/>
              <Route exact path = {'/add_book'}  component={AddBook}/>
              <Route exact path={'/book_list'} component={BookList}/>
              <Route exact path={'/admin'} component={Admin}/>
              <Route exact path={'/add_user'} component={AddUser}/>
              <Route exact path={'/view_user'} component={ViewUser}/>
            </Switch>
          </div>
          </Router>
        </React.Fragment>
    )
}
export default NavBar;
