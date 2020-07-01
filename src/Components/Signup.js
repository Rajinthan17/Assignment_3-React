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
        successful: false
      };
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
        this.setState({
          successful: true,
          message: "Registered successfully"
        })
      } else {
        this.setState({
          successful: false,
          message: "username/password/email is empty"
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
                      helperText="Please Enter your username"
                      variant="outlined"
                      onChange = {this.onChangeUsername}
                      />
                    </p>
                    <p>
                      <TextField
                      id="email"
                      label="E-Mail"
                      defaultValue=""
                      helperText="Please Enter The E-mail"
                      variant="outlined"
                      onChange = {this.onChangeEmail}
                      />
                    </p>
                    <p>
                      <TextField
                      id="password"
                      label="Password"
                      type="password"
                      defaultValue=""
                      helperText="Please Enter The Password"
                      variant="outlined"
                      onChange = {this.onChangePassword}
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
                    <div>
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