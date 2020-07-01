import React, {Component,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card, CardContent, Typography, Grid, FormControl, TextField } from '@material-ui/core';



const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      
    },
    
  }));
  const style = {
    root: {
      minWidth: 275,
      backgroundColor:'#263238',
      marginTop: 20,
      
      color: 'white'
    },
    title: {
      fontSize: 24,
      textAlign:'center'
    },
    formStyle : {
      color : '#2979ff',
      marginLeft : 20
    },
    buttonStyle : {
      backgroundColor:'#263238',
    }
}


  class Login extends Component {
    constructor(props){
      super(props)
      this.state = {
        username: "",
        email: "",
        password: "",
        message: "",
        successful: false
      }
    }
    onChangeUsername = (e) => {
      this.setState({
        username: e.target.value
      });
    }
  
    onChangePassword = (e) => {
      this.setState({
        password: e.target.value
      });
    }
  
      handleLogin = (e) => {
        e.preventDefault();
    
        if (this.state.username && this.state.password) {
              
              console.log("username = " + this.state.username)
              console.log("password = " + this.state.password)
              localStorage.setItem('id', '1');
              localStorage.setItem('username', this.state.username);
              localStorage.setItem('email', 'biru@gmail.com');
              localStorage.setItem('roles', 'ROLE_ADMIN');
              // this.props.LoginStatus()
              this.props.history.push("/profile");
              window.location.reload();
        } else {
          this.setState({
            message: "Empty username or password"
          })
        }
      }
    render(){
    return (
      <div className={classes.root}  style={{ padding: 10 }}>
        <Grid container spacing={1} >
          <Grid item xs>
          </Grid>
          <Grid item xs = {3}>
          <Paper>
              <Card style={style.root} variant="outlined">
              <Grid container spacing={1} >
              <Grid item xs/>
                <Grid item xs = {10}>
                <div style = {{marginLeft: 40},{backgroundColor : "White"}}>
                <form style = {{color : "black"},{marginLeft: 15}} onSubmit={this.handleLogin}>
                  <h1 style = {{color: '#2979ff'}}>Login To Book Shop</h1>
                  <p>
                        <FormControl>
                          <TextField
                          id="userName"
                          label="User Name"
                          defaultValue=""
                          helperText="Please Enter your username"
                          variant="outlined"
                          onChange = {this.onChangeUsername}
                          />
                        </FormControl>
                        <FormControl>
                        <TextField
                        id="password"
                        label="Password"
                        type="password"
                        defaultValue=""
                        helperText="Please Enter The Password"
                        variant="outlined"
                        onChange = {this.onChangePassword}
                        />
                        </FormControl>
                        <FormControl>
                         <button>
                           <span>Login</span>
                         </button>
                       </FormControl>
                  </p>
                </form>
                </div>
                </Grid>
              <Grid item xs/>
              </Grid>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
        </div>
    )
    }
  }

export default Login 