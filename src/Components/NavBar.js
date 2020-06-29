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
    return(
        <React.Fragment>
          <Router>
          <AppBar position="static" className={classes.appBar}>
              <Toolbar>
                  <LibraryBooksIcon fontSize = "large"/>
                  <Typography  className={classes.title}>
                      Books Shop
                      <Button href = "/" className={classes.Button}>Home</Button>
                      {props.isLogIn && (
                        <>
                          <Button href = "/add_book" className={classes.Button}>Add Book</Button>
                          <Button href = "/book_list" className={classes.Button}>Book List</Button>
                        </>
                      )}
                  </Typography>
                { props.isLogIn ? 
                  (<><AccountCircleIcon fontSize = "large" align = 'center'/> 
                <Typography>PROFILE</Typography>
                  <Button href = "/" className={classes.Button} >Logout</Button>
                  </>):
                  (<div><Button href = "/login" className={classes.Button} >Login</Button>
                  <Button href = '/register' className={classes.Button} >Signup</Button></div>)}
              </Toolbar>
          </AppBar>
          <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
            </Switch>
          </div>
          </Router>
        </React.Fragment>
    )
}
export default NavBar;
