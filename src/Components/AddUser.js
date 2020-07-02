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
      }
    }
    handleLogin = (e) => {
      this.props.history.push('/book_list');
      window.location.reload();
}
      Booksave = (e) => {
        e.preventDefault();
        this.setState({
          successful: false,
          message: "Sucess- User Add Sucessfully"
        })
      }
      Bookupdate = (e) => {
        e.preventDefault();
        this.setState({
          successful: false,
          message: "Sucess- User Update Sucessfully"
        })
      }
    render(){
    return (
      <div className={classes.root}  style={{ padding: 10 }}>
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
                  <form style = {{color : "black"},{marginLeft: 15}}>
                  { this.props.location.customNameData ? 
                  (<h3 style = {{color: 'black'}}> <AddBoxIcon fontSize = "small"/>  Add New User</h3> ):
                  (<h3 style = {{color: 'black'}}> <CheckBoxIcon fontSize = "small"/>  Update User </h3>)
                  }
                          <FormControl>
                            <TextField style  ={{width : "150%"}}
                            required
                            size="small"
                            id="Username"
                            label="Username"
                            defaultValue=""
                            helperText="Enter Username"
                            variant="outlined"
                            />
                          </FormControl>
                          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                          <FormControl>
                              <TextField style  ={{width : "150%"}}
                              required
                              size="small"
                              id="email"
                              label="Email"
                              defaultValue=""
                              helperText="Enter Email Address"
                              variant="outlined"
                              />
                          </FormControl>
                          <br/>
                          <FormControl style  ={{width : "45%"}} >
                              <InputLabel >Role</InputLabel>
                              <NativeSelect
                              inputProps={{
                                  name: 'Role',
                                  id: 'Role',
                              }}
                              >
                              <option value={"Select Role"}>Select Role</option>
                              <option value={"Admin"}>Admin</option>
                              <option value={"User"}>User</option>
                              </NativeSelect>
                              <FormHelperText>Please Select your Role</FormHelperText>
                          </FormControl>
                          &emsp;&emsp;
                          <FormControl>
                              <TextField style  ={{width : "150%"}}
                              required
                              size="small"
                              id="password"
                              label="Password"
                              type = "password"
                              defaultValue=""
                              helperText="Enter your password"
                              variant="outlined"
                              />
                          </FormControl>
                          
                      <br/>
                      <MuiThemeProvider theme={theme}>
                      <Button style={{float: 'right'}}
                          variant="contained"
                          color="primary"
                          size="small"
                          startIcon={<ListIcon />}
                          onClick = {this.handleLogin}
                          >
                          User List
                      </Button>
                      &emsp;&emsp;
                      <Button style={{float: 'right'}}
                          variant="contained"
                          color="primary"
                          size="small"
                          startIcon={<RotateLeftIcon />}
                          >
                          Reset
                      </Button>
                      &emsp;&emsp;
                    { localStorage.getItem('isLogin') ? 
                      (<Button style={{float: 'right'}}
                          variant="contained"
                          color="secondary"
                          size="small"
                          startIcon={<SaveIcon />}
                          onClick = {this.Booksave}
                          >
                          Save
                      </Button>):
                      (<Button style={{float: 'right'}}
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<SaveIcon />}
                        onClick = {this.Bookupdate}
                        >
                        Update
                      </Button>)
                    }
                      </MuiThemeProvider>
                  </form>
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