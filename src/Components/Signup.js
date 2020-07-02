import React, {Component,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card, CardContent, Typography, Grid, FormControl, TextField } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';



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
  class Signup extends Component {
    constructor(props){
      super(props)
      this.state = {
        username: "",
        email: "",
        password: "",
        message: "",
        successful: false,
        userMessage: '',
        emailMessage: '',
        passMessage : ''
      };
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
      else if(this.state.username.length < 3 || this.state.username.length >20 ){
        this.setState({
          userMessage: "username must be between 3 and 20 characters"
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
  
    onChangeEmail = (e) => {
      this.setState({
        email: e.target.value
      });
      if(this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
        this.setState({
          emailMessage: ""
        })
        e.helperText = this.state.emailMessage
      }
      else{
        this.setState({
          emailMessage: "This is not a valide Email"
        })
        e.helperText = this.state.emailMessage
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
      else if(this.state.password.length < 6 || this.state.password.length >40 ){
        this.setState({
          passMessage: "Password must be between 6 and 40 characters"
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
  
    handleRegister = (e) => {
      e.preventDefault();
  
      if (this.state.username && this.state.email && this.state.password) {
        console.log(this.state.username + " " + this.state.password + " " + this.state.email)
        this.setState({
          successful: true,
          message: "Registered successfully"
        })
      }
    }
    render(){
      
    return (
      <div className={classes.root}  style={{ padding: 10 }}>
        <Grid container spacing={1} >
          <Grid item xs>
          </Grid>
          <Grid item xs = {5}>
          <Paper>
              <Card style={style.root} variant="outlined">
              <Grid container spacing={1} >
              <Grid item xs/>
                <Grid item xs = {10}>
                <div style = {{marginLeft: 40},{backgroundColor : "White"}}>
                  <form style = {{marginLeft:15}} onSubmit={this.handleRegister}>
                  {!this.state.successful && (
                    <>
                    <h1 style = {{color: '#2979ff'}}>Register Account at Book Shop</h1>
                    <p>
                      <TextField
                      id="userName"
                      label="User Name"
                      defaultValue=""
                      helperText={this.state.userMessage ? (<span style = {{color:"red"}}>{this.state.userMessage}</span>):("Enter Your User Name")}
                      variant="outlined"
                      onChange = {this.onChangeUsername}
                      onClick = {this.onChangeUsername}
                      />
                    </p>
                    <p>
                      <TextField
                      id="email"
                      label="E-Mail"
                      defaultValue=""
                      helperText={this.state.emailMessage ? (<span style = {{color:"red"}}>{this.state.emailMessage}</span>):("Enter Your Email Address")}
                      variant="outlined"
                      onChange = {this.onChangeEmail}
                      onClick = {this.onChangeEmail}
                      />
                    </p>
                    <p>
                      <TextField
                      id="password"
                      label="Password"
                      type="password"
                      defaultValue=""
                      helperText={this.state.passMessage ? (<span style = {{color:"red"}}>{this.state.passMessage}</span>):("Enter Your Password")}
                      variant="outlined"
                      onChange = {this.onChangePassword}
                      onClick = {this.onChangePassword}
                      />
                    </p>
                    <p>
                        <FormControl>
                          <button>Sign Up</button>
                        </FormControl>
                    </p>
                  </>
                    )}
                    {
                    this.state.message && (
                    <div style = {{margin:20}}>
                      <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                          {this.state.message}
                      </Typography>
                    </div>
                  )}
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

export default Signup 