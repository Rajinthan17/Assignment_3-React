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
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';






const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      
    },
    button: {
        margin: theme.spacing(1),
      },
    saveB : {
        backgroundColor:'green',
        color : '#2979ff',
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
  class AddBook extends Component {
    constructor(props){
      super(props)
    }
  
      handleLogin = (e) => {
        e.preventDefault();
    
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
                <div style = {{marginLeft: 40},{backgroundColor : "White"}}>
                <form style = {{color : "black"},{marginLeft: 15}} onSubmit={this.handleLogin}>
                <h3 style = {{color: 'black'}}> <AddBoxIcon fontSize = "small"/>  Add New Book</h3> 
                        <FormControl>
                          <TextField style  ={{width : "150%"}}
                          required
                          size="small"
                          id="Title"
                          label="Title"
                          defaultValue=""
                          helperText="Enter Book Title"
                          variant="outlined"
                          />
                        </FormControl>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <FormControl>
                            <TextField style  ={{width : "150%"}}
                            required
                            size="small"
                            id="Author"
                            label="Author"
                            defaultValue=""
                            helperText="Enter Book Author"
                            variant="outlined"
                            />
                        </FormControl>
                        <br/>
                        <FormControl>
                            <TextField style  ={{width : "150%"}}
                            size="small"
                            required
                            id="cover_photo_url"
                            label="Cover Photo URL"
                            defaultValue=""
                            helperText="Cover Photo URL"
                            variant="outlined"
                            />
                        </FormControl>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <FormControl>
                            <TextField style  ={{width : "150%"}}
                            size="small"
                            required
                            id="ISBN_Number"
                            label="ISBN Number"
                            defaultValue=""
                            helperText="Enter Book ISBN Number"
                            variant="outlined"
                            />
                        </FormControl>
                        <br/>
                        <FormControl>
                            <TextField
                            size="small"
                            required
                            id="Price"
                            label="Price"
                            defaultValue=""
                            helperText="Enter Book Price"
                            variant="outlined"
                            />
                        </FormControl>
                        &emsp;&emsp;
                        <FormControl size="small">
                            <InputLabel >Name</InputLabel>
                            <NativeSelect
                            inputProps={{
                                name: 'Language',
                                id: 'Language',
                            }}
                            >
                            <option value={"Select Language"}>Select Language</option>
                            <option value={"Tamil"}>Tamil</option>
                            <option value={"English"}>English</option>
                            <option value={"Sinhala"}>Sinhala</option>
                            </NativeSelect>
                            <FormHelperText>Please Select your language</FormHelperText>
                        </FormControl>
                        &emsp;&emsp;
                        <FormControl size="small">
                        <InputLabel >Name</InputLabel>
                        <NativeSelect
                        inputProps={{
                            name: 'Genre',
                            id: 'Genre',
                        }}
                        >
                        <option value={"Select Genere"}>Select Language</option>
                        <option value={"Bio"}>Biography</option>
                        <option value={"Story"}>Story</option>
                        <option value={"Drama"}>Drama</option>
                        </NativeSelect>
                        <FormHelperText>Please Select your Genere</FormHelperText>
                        </FormControl>
                    <br/>
                    <MuiThemeProvider theme={theme}>
                    <Button style={{float: 'right'}}
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<ListIcon />}
                        >
                        Book List
                    </Button>
                    <Button style={{float: 'right'}}
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<RotateLeftIcon />}
                        >
                        Reset
                    </Button>
                    <Button style={{float: 'right'}}
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<SaveIcon />}
                        >
                        Save
                    </Button>
                    </MuiThemeProvider>
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

export default AddBook 