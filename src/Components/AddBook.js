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
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import BookList from './BookList';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import BookService from './BookService';






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
  class AddBook extends Component {
    constructor(props){
      super(props)
      this.state = {
        message : '',
        successful : true,
        title:'',
        author:'',
        url:'',
        isbn:'',
        price:'',
        language:'',
        genere:'',
        vertical : 'top',
        horizontal : 'center',
        isSucess : false,
      }
    }
    handleLogin = (e) => {
      this.props.history.push('/book_list');
      window.location.reload();
    }
    fillAlert = () => {
      this.setState({snackbaropen:false})
      if(this.state.isSucess){
        this.props.history.push("/admin");
      }
    }
    
      Booksave = (e) => {
        e.preventDefault();

        let book = {
          title:this.state.title,
          author:this.state.author,
          url:this.state.url,
          isbNumber:this.state.isbn,
          price:this.state.price,
	        language:this.state.language,
	        genere:this.state.genere
        }
        if(this.state.title.length>4 && this.state.title.length>3 && this.state.url.length>5 
          && this.state.isbn.length>5 && this.state.price.length>2 && this.state.language && this.state.genere){
        BookService.AddBook(book)
        .then((Response)=>{
            this.setState({snackbaropen:true,isSucess:true, message:'Book Added Successfully'})
            setTimeout(()=> this.fillAlert(), 3000)
          })
          .catch((error)=>{
            this.setState({snackbaropen:true, message:'Please Fill the Form Correctly'})
            setTimeout(()=> this.fillAlert(), 3000)
          })
        }else{
          this.setState({snackbaropen:true, message:'Please Fill the Form Correctly'})
          // setTimeout(()=> this.fillAlert(), 3000)
        }
      }
      Bookupdate = (e) => {
        e.preventDefault();
        let book = {
          title:this.state.title,
          author:this.state.author,
          url:this.state.url,
          isbNumber:this.state.url,
          price:this.state.price,
	        language:this.state.language,
	        genere:this.state.genere
        }
        if(this.state.title.length>4 && this.state.title.length>3 && this.state.url.length>5 
          && this.state.isbn.length>5 && this.state.price.length>2 && this.state.language && this.state.genere){
          BookService.UpdateBook(this.props.match.params.id,book)
          .then((Response)=>{
            this.setState({snackbaropen:true,isSucess:true, message:'Book Update Successfully'})
              setTimeout(()=> this.fillAlert(), 3000)
          })
          .catch((error)=>{
            this.setState({snackbaropen:true, message:'Please Fill the Form Correctly'})
            setTimeout(()=> this.fillAlert(), 3000)
          })
        }else{
          this.setState({snackbaropen:true, message:'Please Fill the Form Correctly'})
          // setTimeout(()=> this.fillAlert(), 3000)
        }
      }

      onChange=(e)=>{
        e.preventDefault();
        this.setState({
          [e.target.name] : e.target.value
        })
      }

    componentDidMount(){
      if(this.props.match.params.id){
        BookService.GetById(this.props.match.params.id)
        .then((Response)=>{
          this.setState({
            title:Response.data.title,
            author:Response.data.author,
            url:Response.data.url,
            isbn:Response.data.isbNumber,
            price:Response.data.price,
            language:Response.data.language,
            genere:Response.data.genere,
          })
        })
      }

      ValidatorForm.addValidationRule('isTitle',(value) => {
        if((this.state.title.length>4)){
        return true;
        }
        return false;
        })
      ValidatorForm.addValidationRule('isAuthor',(value) => {
        if((this.state.title.length>3)){
        return true;
        }
        return false;
        })
      ValidatorForm.addValidationRule('isUrl',(value) => {
        if((this.state.url.length>5)){
        return true;
        }
        return false;
        })
      ValidatorForm.addValidationRule('isIsbn',(value) => {
        if((this.state.isbn.length>5)){
        return true;
        }
        return false;
        })
      ValidatorForm.addValidationRule('isPrice',(value) => {
        if((this.state.price.length>2)){
        return true;
        }
        return false;
        })
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
                  (<h3 style = {{color: 'black'}}> <CheckBoxIcon fontSize = "small"/>  Update Book </h3>):
                  (<h3 style = {{color: 'black'}}> <AddBoxIcon fontSize = "small"/>  Add New Book</h3> )
                  }
                          <FormControl>
                            <TextValidator 
                            required='true' 
                            label="Title" 
                            variant="outlined" 
                            name = "title"
                            helperText="Enter Title" 
                            validators={['required',"isTitle"]}
                            onChange={this.onChange} 
                            value={this.state.title}
                            errorMessages = {["This field is not Empty","Title must be more than 4 characters"]}
                            size="small"
                            style = {{width: 300}}
                            />
                          </FormControl>
                          &emsp;&emsp;&emsp;
                          <FormControl>
                          <TextValidator 
                            required='true' 
                            label="Author" 
                            variant="outlined" 
                            name = "author"
                            helperText="Enter Author Name" 
                            validators={['required',"isAuthor"]}
                            onChange={this.onChange} 
                            value={this.state.author}
                            errorMessages = {["This field is not Empty","Author must be more than 3 characters"]}
                            size="small"
                            style = {{width: 300}}
                            />
                          </FormControl>
                          <br/>
                          <FormControl>
                            <TextValidator 
                              required='true' 
                              label="Cover Photo URL" 
                              variant="outlined" 
                              name = "url"
                              helperText="Enter Cover Photo URL" 
                              validators={['required',"isUrl"]}
                              onChange={this.onChange} 
                              value={this.state.url}
                              errorMessages = {["This field is not Empty","URL must be more than 5 characters"]}
                              size="small"
                              style = {{width: 300}}
                              />
                          </FormControl>
                          &emsp;&emsp;&emsp;
                          <FormControl>
                            <TextValidator 
                                required='true' 
                                label="ISBN Number" 
                                type = "number"
                                variant="outlined" 
                                name = "isbn"
                                helperText="Enter Cover Photo URL" 
                                validators={['required',"isIsbn"]}
                                onChange={this.onChange} 
                                value={this.state.isbn}
                                errorMessages = {["This field is not Empty","ISBN must be more than 5 Number"]}
                                size="small"
                                style = {{width: 300}}
                                />
                          </FormControl>
                          <br/>
                          <FormControl>
                          <TextValidator 
                                required='true' 
                                label="Price" 
                                type = "number"
                                variant="outlined" 
                                name = "price"
                                helperText="Enter Price" 
                                validators={['required',"isPrice"]}
                                onChange={this.onChange} 
                                value={this.state.price}
                                errorMessages = {["This field is not Empty","Price must be more than 2 Number"]}
                                size="small"
                                style = {{width: 300}}
                                />
                          </FormControl>
                          &emsp;&emsp;
                          <FormControl size="small">
                              <InputLabel >language</InputLabel>
                              <NativeSelect
                              value = {this.state.language}
                              onChange={this.onChange}
                              inputProps={{
                                  name: 'language',
                                  id: 'language',
                              }}
                              >
                              <option value={""}>Select Language</option>
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
                          value = {this.state.genere}
                          onChange={this.onChange}
                          inputProps={{
                              name: 'genere',
                              id: 'genere',
                          }}
                          >
                          <option value={""}>Select Language</option>
                          <option value={"Bio"}>Biography</option>
                          <option value={"Story"}>Story</option>
                          <option value={"Drama"}>Drama</option>
                          </NativeSelect>
                          <FormHelperText>Please Select your Genere</FormHelperText>
                          </FormControl>
                      <br/>
                      <MuiThemeProvider theme={theme}>
                      <div style = {{float:"right"}}>
                    { this.props.match.params.id ? 
                    (<Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick = {this.Bookupdate}
                    >
                    Update
                  </Button>):
                      (<Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          startIcon={<SaveIcon />}
                          onClick = {this.Booksave}
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
                          Book List
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

export default AddBook 