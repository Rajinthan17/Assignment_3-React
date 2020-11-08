import React, {Component,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card, CardContent, Typography, Grid, FormControl, TextField } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ListIcon from '@material-ui/icons/List';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import BookList from './BookList';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import UserService from './UserService';







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
const theme = createMuiTheme({
    palette: {
      secondary: {
      main: '#11cb5f',
      },
    }
   });
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
  class AddUser extends Component {
    constructor(props){
      super(props)
      this.state = {
        message : '',
        successful : true,
        username:"",
        email:"",
        password:"",
        role:'',
        vertical : 'top',
        horizontal : 'center',
        isSucess : false,
      }
    }

    fillAlert = () => {
      this.setState({snackbaropen:false})
      if(this.state.isSucess){
        this.props.history.push("/admin");
      }
    }
    
    componentDidMount(){
      if(this.props.match.params.id){
        UserService.GetById(this.props.match.params.id)
        .then((Response)=>{
          this.setState({
            username:Response.data.username,
            email:Response.data.email,
            role:Response.data.roles[0].name,
          })
        })
        .catch((error)=>{
          this.setState({snackbaropen:true, message:'Somthing went wrong'})
          setTimeout(()=> this.fillAlert(), 4000)
        })
      }

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

    handleLogin = (e) => {
      this.props.history.push('/view_user');
      window.location.reload();
    }

    Usersave = (e) => {
      e.preventDefault();

      let user = {
        username:this.state.username,
        email:this.state.email,
        password:this.state.password,
        roles: [this.state.role]
      }
      
      if(this.state.username.length>4 && this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      && this.state.password.length>=8 && this.state.password.length<=16 ){
        UserService.createUser(user)
        .then((Response)=>{
          this.setState({snackbaropen:true,isSucess:true, message:'User Added Successfully'})
              setTimeout(()=> this.fillAlert(), 3000)
        })
        .catch((error)=>{
          this.setState({snackbaropen:true, message:'Please Fill the Form Correctly'})
          setTimeout(()=> this.fillAlert(), 4000)
        })
      }else{
        this.setState({snackbaropen:true, message:'Please Fill the Form Correctly'})
          setTimeout(()=> this.fillAlert(), 4000)
      }
    }
    Userupdate = (e) => {
      e.preventDefault();
      let user = {
        username:this.state.username,
        email:this.state.email,
        updateroles: [this.state.role]
      }
      if(this.state.username.length>4 && this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      && this.state.password.length>=8 && this.state.password.length<=16 ){
        UserService.UpdateUser(this.props.match.params.id,user)
        .then((Response)=>{
          this.setState({snackbaropen:true,isSucess:true, message:'User Update Successfully'})
              setTimeout(()=> this.fillAlert(), 3000)
        })
        .catch((error)=>{
          this.setState({snackbaropen:true, message:'Please Fill the Form Correctly'})
          setTimeout(()=> this.fillAlert(), 4000)
        })
      }else{
        this.setState({snackbaropen:true, message:'Please Fill the Form Correctly'})
          setTimeout(()=> this.fillAlert(), 4000)
      }
    }
    onChangeUsername = (e) => {
      this.setState({
        username: e.target.value
      });
    }

    onChangeRole = (e) => {
      this.setState({
        role: e.target.value
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
    render(){
      const { vertical, horizontal } = this.state;
    return (
      <div className={classes.root}  style={{ padding: 10 }}>
        <Snackbar open={this.state.snackbaropen} autoHideDuration={4000} anchorOrigin={{ vertical,horizontal }} key={vertical + horizontal}>
              { this.state.isSucess ? (
                <Alert variant="filled" severity="success">
                  {this.state.message}
                </Alert>
              ):(
                <Alert variant="filled" severity="error">
                {this.state.message}
              </Alert>
              )
              }
            </Snackbar>
        <Grid container spacing={1} >
          <Grid item xs>
          </Grid>
          <Grid item xs = {8}>
          <Paper>
              <Card style={style.root} variant="outlined">
              <Grid container spacing={1} >
              <Grid item xs/>
                <Grid item xs = {11}>
                <Paper>
                  <Card style = {{margin:5}}>
                {this.state.successful ?
                (<div style = {{marginLeft: 40}}>
                  <ValidatorForm noValidate autoComplete="off" style={{width:'100%',color : "black",marginLeft: 15,padding:10}}>
                  { this.props.match.params.id ? 
                  (<h3 style = {{color: 'black'}}> <CheckBoxIcon fontSize = "small"/>  Update User </h3>):
                  (<h3 style = {{color: 'black'}}> <AddBoxIcon fontSize = "small"/>  Add New User</h3> )
                  
                  }
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
                            style = {{width: 300}}
                            />
                          </FormControl>
                          &emsp;&emsp;&emsp;
                          <FormControl>
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
                          </FormControl>
                          <br/>
                          <FormControl style  ={{width : 300}} >
                              <InputLabel >Role</InputLabel>
                              <NativeSelect
                              inputProps={{
                                  name: 'Role',
                                  id: 'Role',
                              }}
                              value = {this.state.role}
                              onChange = {this.onChangeRole}
                              >
                              <option value={"Select Role"}>Select Role</option>
                              <option value={"ROLE_ADMIN"}>Admin</option>
                              <option value={"ROLE_USER"}>User</option>
                              </NativeSelect>
                              <FormHelperText>Please Select your Role</FormHelperText>
                          </FormControl>
                          &emsp;&emsp;&emsp;
                          { !this.props.match.params.id ? (
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
                                style = {{width: 300}}
                                />
                          </FormControl>
                          ):(null)}
                      <br/>
                      <MuiThemeProvider theme={theme}>
                      <div style = {{float:"right"}}>
                    { this.props.match.params.id ? 
                      (<Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<SaveIcon />}
                        onClick = {this.Userupdate}
                        >
                        Update
                      </Button>):
                      (<Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      startIcon={<SaveIcon />}
                      onClick = {this.Usersave}
                      >
                      Save
                  </Button>)
                    }
                    &emsp;
                   
                      <Button 
                          variant="contained"
                          color="primary"
                          size="small"
                          startIcon={<RotateLeftIcon />}
                          >
                          Reset
                      </Button>
                      &emsp;
                    <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          startIcon={<ListIcon />}
                          onClick = {this.handleLogin}
                          >
                          User List
                      </Button>
                      
                      &emsp;&emsp;
                      </div>
                      </MuiThemeProvider>
                  </ValidatorForm>
                </div>):
                  (<center><Button style = {{margin:20}}
                  variant="contained"
                  color="secondary"
                  size="small"
                  startIcon={<CheckCircleOutlineIcon />}
                  >
                  {this.state.message}
                </Button></center>)
                }
                </Card>
                </Paper>
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

export default AddUser 