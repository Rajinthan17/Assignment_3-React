import React, {Component,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card, CardContent, Typography, Grid, FormControl, TextField } from '@material-ui/core';
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


  class Login extends Component {
    constructor(props){
      super(props)
      this.state = {
        username: "",
        email: "",
        password: "",
        successful: false,
      }
    }
    componentDidMount(){
      ValidatorForm.addValidationRule('isUserName',(value) => {
        if((this.state.username.length>4)){
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
  
    onChangePassword = (e) => {
      this.setState({
        password: e.target.value
      });
    }
  
      handleLogin = (e) => {
        e.preventDefault()
        if (this.state.username && this.state.password) {
              // console.log("username = " + this.state.username)
              // console.log("password = " + this.state.password)
              // localStorage.setItem('id', '1');
              // localStorage.setItem('username', this.state.username);
              // localStorage.setItem('email', 'Rajinthan@gmail.com');
              // localStorage.setItem('roles', 'ADMIN'); //Please change role as ADMIN to check Admin
              let user = {
                username : this.state.username,
                password : this.state.password
              }
              AuthService.login(user)
              .then((Response)=> {
                console.log(Response)
                localStorage.setItem('id', Response.data.id);
                localStorage.setItem('username', Response.data.username);
                localStorage.setItem('email', Response.data.email);
                localStorage.setItem('roles', Response.data.roles[0])
                localStorage.setItem('token', Response.data.basicToken);
                this.props.history.push("/profile");
                window.location.reload();
              })
        } 
      }
    render(){
    return (
      <div className={classes.root}  style={{ padding: 10 }}>
        <Grid container spacing={1} >
          <Grid item xs>
          </Grid>
          <Grid item xs = {4}>
          <Paper>
              <Card style={style.root} variant="outlined">
              <Grid container spacing={1} >
              <Grid item xs/>
                <Grid item xs = {11}>
                <div style = {{marginLeft: 40},{backgroundColor : "White"}}>
                <ValidatorForm noValidate autoComplete="off" style={{width:'100%',color : "black",marginLeft: 15,padding:10}}onSubmit={this.handleLogin}>
                  <h1 style = {{color: '#2979ff'}}>Login To Book Shop</h1>
                  <p>
                        <FormControl>
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
                            style = {{width: "90%"}}
                            />
                        </FormControl>
                        <FormControl>
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
                            style = {{width: "90%"}}
                          />

                        </FormControl>
                        <br/>
                        <FormControl>
                         <button>
                           <span>Login</span>
                         </button>
                       </FormControl>
                  </p>
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

export default Login 