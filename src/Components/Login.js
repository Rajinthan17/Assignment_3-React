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
        userMessage: "",
        passMessage: "",
        successful: false,
      }
    }
    onChangeUsername = (e) => {
      this.setState({
        username: e.target.value
      });
      if(this.state.username.length <= 0){
        this.setState({
          userMessage: "This Field is Required"
        })
        e.helperText = this.state.userMessage
      }
      else{
        this.setState({
          userMessage: ""
        })
        e.helperText = this.state.userMessage
      }
    }
  
    onChangePassword = (e) => {
      this.setState({
        password: e.target.value
      });
      if(this.state.password.length <= 0){
        this.setState({
          passMessage: "This Field is Required"
        })
        e.helperText = this.state.passMessage
      }
      else{
        this.setState({
          passMessage: ""
        })
        e.helperText = this.state.passMessage
      }
    }
  
      handleLogin = (e) => {
        e.preventDefault()
        if (this.state.username && this.state.password) {
              console.log("username = " + this.state.username)
              console.log("password = " + this.state.password)
              localStorage.setItem('id', '1');
              localStorage.setItem('username', this.state.username);
              localStorage.setItem('email', 'Rajinthan@gmail.com');
              localStorage.setItem('roles', 'user'); //Please change role as ADMIN to check Admin Board
              
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
                          variant="outlined"
                          onChange = {this.onChangeUsername}
                          onClick = {this.onChangeUsername}
                          helperText={this.state.userMessage ? (<span style = {{color:"red"}}>{this.state.userMessage}</span>):("Enter Your User Name")}
                          />
                        </FormControl>
                        <FormControl>
                        <TextField
                        id="password"
                        label="Password"
                        type="password"
                        defaultValue=""
                        
                        variant="outlined"
                        onChange = {this.onChangePassword}
                        onClick = {this.onChangePassword}
                        helperText={this.state.passMessage ? (<span style = {{color:"red"}}>{this.state.passMessage}</span>):("Enter Your Password")}
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