import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { makeStyles, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid,TextField,InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useTheme } from '@material-ui/core/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import axios from 'axios';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import BookService from "./BookService";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  grid: {
      margin: 40,
      padding: '10px 10px 10px 10px',
      backgroundColor: "black"
  },
  paper: {
    padding: '10px 10px 10px 10px', 
    margin: '10px 10px 10px 10px',
    position: 'inherit'
  },
  search: {
    position: 'relative',
    align:'left',
    },
});

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
    console.log("Page" + page)
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
    console.log("Page" + page)
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}



export default function BookDetails(props) {

  const classes = useStyles();
  const [books, setBooks] = React.useState([]);
  const [searchString, setSearchString]= React.useState('');
  const [page, setPage] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [priceADC, setPriceADC] = React.useState(false);
  const [snackbaropen, setSnackbaropen] = React.useState(false);
  const [message, setMessage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal } = state;
  // const [id , setId] = React.useState();
  // var books = []
  // var id = 8
  
  const searchChange = (e) => {
    console.log(e.target.value)
    setSearchString(e.target.value)
  }

  const fillAlert = () => {
    window.location.reload()
  }

  const deleteBook = (deleteId) => {
    BookService.DeleteBookById(deleteId)
    .then((Response) => {
      setMessage('Book Deleted Successfully')
      setSnackbaropen(true)
      //setState({snackbaropen:true, message:'Book Deleted Successfully'})
      setTimeout(()=> fillAlert(), 3000)
    })
  }

  const serachData = () => {
    setPage(0)
    let sort = "DESC"
      if(priceADC){
        sort = "ASC"
      }
    if(searchString == ''){
      
      BookService.GetBookInPage(sort,page)
      .then((Response) => {
        setCount (Response.data.Total_No_Of_Elements)
        setBooks ( Response.data.data)
    })
    }else{
      BookService.GetSearchedBooks(0,searchString,sort)
      .then((Response) => {
        setCount (Response.data.Total_No_Of_Elements)
        console.log(count)
        setBooks( Response.data.data)
    })
  }
}


    useEffect(() => {
      let sort = "DESC"
      if(priceADC){
        sort = "ASC"
      }
      BookService.GetBookInPage(sort,page)
        .then((Response) => {
        console.log(Response.data.Total_No_Of_Elements)
        setCount (Response.data.Total_No_Of_Elements)
        setBooks ( Response.data.data)
      })
    },[]);


    const handleChangePage = (event, newPage) => {
      setPage(newPage);
      let sort = "DESC"
      if(priceADC){
        sort = "ASC"
      }
      if(searchString == ''){
        
        BookService.GetBookInPage(sort,newPage)
      .then((Response) => {
        console.log(Response.data.Total_No_Of_Elements)
        setCount (Response.data.Total_No_Of_Elements)
        setBooks ( Response.data.data)
      })
    }else{
      BookService.GetSearchedBooks(newPage,searchString,sort)
      .then((Response) => {
        console.log(Response.data.Total_No_Of_Elements)
        setCount (Response.data.Total_No_Of_Elements)
        setBooks ( Response.data.data)
        
      })
    }
      
      
      
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
   
    // const localStorageEditSave = (updateId) => {
    //   localStorage.setItem('bookId',updateId)
    //   console.log(updateId)
    //   props.history.push("/edit")
    // }

    const clearText = (e) => {
        setSearchString ('')
        let sort = "DESC"
        if(priceADC){
          sort = "ASC"
        }
        BookService.GetBookInPage(sort,page)
        .then((Response) => {
        console.log(Response.data.Total_No_Of_Elements)
        setCount (Response.data.Total_No_Of_Elements)
        setBooks ( Response.data.data)
        setPage(0);  
      })
    }

    const priceASDChange = (e) => {
      setPriceADC(!priceADC)
      serachData()
    }
  
  return (
    <>
    <Snackbar open={snackbaropen} autoHideDuration={4000} anchorOrigin={{ vertical,horizontal }} key={vertical + horizontal}>
                <Alert variant="filled" severity="error">
                  {message}
                </Alert>
    </Snackbar>
      <div >
    <Grid className={classes.grid} style = {{backgroundColor:"#263238"}}>
      <Paper className = {classes.paper}>
     
        <div className={classes.search} style = {{margin:20}}>
        <span style = {{fontSize:25}}><ListAltIcon fontSize = "medium"/>Book List</span> 
            <div className={classes.searchIcon} style = {{float: 'right'}}>

              <TextField
        id="input-with-icon-textfield"
        label="Search"
        value = {searchString}
        onChange = {searchChange}
        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick = {() => serachData()}>
                <SearchIcon/>
              </IconButton>
            </InputAdornment>
          ),
          endAdornment : (
            <InputAdornment position="end">
              <IconButton onClick = {() => clearText()}>
                <ClearIcon/>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      
            </div>
        </div>
        <TableContainer>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>Title</b></TableCell>
            <TableCell align="left"><b>Author</b></TableCell>
            <TableCell align="left"><b>URL</b></TableCell>
            <TableCell align="left"><b>ISBN</b></TableCell>
            <TableCell align="left"><b>Price{priceADC ? (<IconButton onClick = {() => priceASDChange()}><ArrowUpwardIcon/></IconButton>):(<IconButton onClick = {() => priceASDChange()}><ArrowDownwardIcon/></IconButton>)}</b></TableCell>
            <TableCell align="left"><b>Language</b></TableCell>
            <TableCell align="left"><b>Genere</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {books.map((row) => (
            <TableRow>
              <TableCell align="left"><><Avatar><PersonPinIcon /></Avatar>{row.title}</></TableCell>
              <TableCell align="left">{row.author}</TableCell>
              <TableCell align="left">{row.url}</TableCell>
              <TableCell align="left">{row.isbNumber}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.language}</TableCell>
              <TableCell align="left">{row.genere}</TableCell>
              <TableCell>
              <IconButton
              onClick={() => deleteBook(row.id)}
              //onClick = {() => deleteBook(row.id)}
              // onClick = {() => window.location.reload()}
              >
              
              <DeleteIcon
                color="default"
                align="left"
                inputProps={{ 'aria-label': 'DeleteIcon with default color' }}
              />
              </IconButton>


              <Link to={`/edit_book/${row.id}`}>
              <IconButton 
              // onClick = {() => localStorageEditSave(row.id)}
              >
                <EditIcon
                color="default"
                align="left"
                inputProps={{ 'aria-label': 'DeleteIcon with default color' }}
              />
              </IconButton>
              </Link>
              </TableCell>
            </TableRow>
          ))}
          
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={5}
              // colSpan={3}
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
              
              // SelectProps={{
              //   inputProps: { 'aria-label': 'rows per page' },
              //   native: true,
              // }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
            
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
      </Paper>
    </Grid>
    </div>
    </>
  );
}