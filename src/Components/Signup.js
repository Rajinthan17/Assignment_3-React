import React, {Component,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card, CardContent, Typography, Grid, FormControl, TextField } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import AuthService from './AuthService';



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
      padding:20,
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
      };
    }

    componentDidMount(){
      ValidatorForm.addValidationRule('isUserName',(value) => {
        if((this.state.username.length>4)){
        return true;
        }
        return false;
        })
      ValidatorForm.addValidationRule('isEmail',(value) => {
        if(this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
        return true;
        }
        return false;
        })
      ValidatorForm.addValidationRule('isPassword',(value) => {
        if((this.state.password.length>=8) && (this.state.password.length<=16)){
        return true;
        }
        return false;
        })
    }
  
    onChangeUsername = (e) => {
      this.setState({
        username: e.target.value
      });
    }
  
    onChangeEmail = (e) => {
      this.setState({
        email: e.target.value
      });
    }
  
    onChangePassword = (e) => {
      this.setState({
        password: e.target.value
      });
    }
  
    handleRegister = (e) => {
      e.preventDefault();
  
      if (this.state.username && this.state.email && this.state.password) {
        console.log(this.state.username + " " + this.state.password + " " + this.state.email)
        
        let user = {
          username:this.state.username,
          email:this.state.email,
          password:this.state.password
        }
        AuthService.signup(user)
        .then((Response)=>{
          this.setState({
            successful: true,
            message: "Registered successfully"
          })
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
                <Grid item xs = {11}>
                <div style = {{marginLeft: 40},{backgroundColor : "White"}}>
                <ValidatorForm noValidate autoComplete="off" style={{width:'100%',color : "black",marginLeft: 15,padding:10}}onSubmit={this.handleRegister}>
                  {!this.state.successful && (
                    <>
                    <h1 style = {{color: '#2979ff'}}>Register Account at Book Shop</h1>
                    <p>
                      <TextValidator 
                      required='true' 
                      label="Username" 
                      variant="outlined" 
                      helperText="Enter your username" 
                      validators={['required',"isUserName"]}
                      onChange={this.onChangeUsername} 
                      value={this.state.username}
                      errorMessages = {["This field is not Empty","Username must be more than 4 characters"]}
                      size="small"
                      style = {{width: 300}}
                      />
                    </p>
                    <p>
                      <TextValidator 
                      required='true' 
                      label="E-Mail" 
                      variant="outlined" 
                      helperText="Enter your email" 
                      validators={['required',"isEmail"]}
                      errorMessages = {["This field is not Empty","E-Mail must be in E-Mail format"]}
                      value = {this.state.email} 
                      onChange = {this.onChangeEmail} 
                      size="small"
                      style = {{width: 300}}
                      />
                    </p>
                    <p>
                      <TextValidator 
                      Required
                      required='true' 
                      label="Password" 
                      type = 'password'
                      variant="outlined" 
                      helperText="Enter your Password" 
                      validators={['required',"isPassword"]}
                      errorMessages = {["This field is not Empty","Password must be between 8 & 16 characters"]}
                      value = {this.state.password} 
                      onChange = {this.onChangePassword} 
                      size="small"
                      style = {{width: 300}}
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
                  </ValidatorForm>
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