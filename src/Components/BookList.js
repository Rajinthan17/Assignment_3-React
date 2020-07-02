import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import Paper from '@material-ui/core/Paper';
import { Card, CardContent, Typography, Grid, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { forwardRef } from 'react';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Avatar from '@material-ui/core/Avatar';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AddBook from "./AddBook";



const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };



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
class BookList extends Component {
    constructor(props){
        super(props)
        this.state = {
            successful : true,
            message:''
        }
    }
    handleLogin = (e) => {
      localStorage.setItem('isLogin', true);
            this.props.history.push('/add_book');
            window.location.reload();
      }
    Sucess = () => {
        this.setState({
          successful: false,
          message: "Sucess- Book Deleted Sucessfully"
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
                {this.state.successful ? 
                    (<MaterialTable style = {{margin:15}} icons={tableIcons}
                        title = {<><ListAltIcon fontSize = "small"/>Book List</> }
                        columns={[
                        { title: 'Title', field: 'Title' },
                        { title: 'Author', field: 'Author' },
                        { title: 'IBSN Number', field: 'IBSN_Number', type: 'numeric' },
                        { title: 'Price', field: 'Price' },
                        {
                            title: 'Language',
                            field: 'Language',
                            lookup: { 1: 'English', 2: 'Tamil', 3: 'Shinhala' },
                        },
                        {
                            title: 'Genere',
                            field: 'Genere',
                            lookup: { 1: 'Biography', 2: 'Drama', 3: 'Story' },
                        },
                        ]}
                        data={[
                        { Title: <><Avatar><PersonPinIcon /></Avatar>The Red Sari</>, Author: 'Javier Moro', IBSN_Number: 1122, Price: 123,Language:1,Genere:2 },
                        { Title: <><Avatar><PersonPinIcon /></Avatar>Freedom in Exile</>, Author: 'Dalai Lama', IBSN_Number: 1212, Price: 163,Language:2,Genere:1 },
                        { Title: <><Avatar><PersonPinIcon /></Avatar>Farishta</>, Author: 'Kapil Isapuari ', IBSN_Number: 2345, Price: 623,Language:3,Genere:1 },
                        { Title: <><Avatar><PersonPinIcon /></Avatar>Super Economies</>, Author: 'Raghav Bahal', IBSN_Number: 2323, Price: 613,Language:1,Genere:2 },
                        { Title: <><Avatar><PersonPinIcon /></Avatar>True Colours</>, Author: 'Adam Gilchrist', IBSN_Number: 1127, Price: 632,Language:1,Genere:2 },
                        { Title: <><Avatar><PersonPinIcon /></Avatar>Lowland</>, Author: 'Jhumpa Lahiri', IBSN_Number: 3456, Price: 613,Language:1,Genere:1 },
                        { Title: <><Avatar><PersonPinIcon /></Avatar>India at Risk</>, Author: 'Jaswant Singh', IBSN_Number: 1987, Price: 634,Language:2,Genere:2 },
                        ]}
                        actions={[
                            {
                                icon: CheckBoxIcon,
                                onClick : () => {this.handleLogin()}
                              },
                            rowData => ({
                                icon: DeleteOutline,
                                tooltip: 'Delete User',
                                onClick : () => {this.Sucess()}
                            })
                        ]}
                        options={{
                        actionsColumnIndex: -1
                        }}
                    />):
                    ( (<center><Button style = {{margin:20}}
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<CheckCircleOutlineIcon />}
                        >
                        {this.state.message}
                      </Button></center>))
                    }
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
export default BookList