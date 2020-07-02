import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import GroupIcon from '@material-ui/icons/Group';


const useStyles = makeStyles((theme) => ({
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
      height: 200,
      color: 'white'
    },
    title: {
      fontSize: 24,
      textAlign:'center'
    },
}


  function Admin() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}  style={{ padding: 10 }}>
        <Grid container spacing={1} >
          <Grid item xs>
          </Grid>
          <Grid item xs = {8}>
          <Paper>
              <Card style={style.root} variant="outlined">
                <div style = {{margin:20} }>
                  <center><h1 style = {{backgroundColor : "brown"}}>Welcome to Admin Panel</h1></center>
                </div>
                <div style = {{margin:20} }>
                    <Grid container spacing={1}>
                        <Grid item xs = {5}>
                            <Paper className={classes.paper}>
                            <center>
                                <GroupIcon fontSize = 'large'/>
                                <br/>
                                <button>
                                   
                                </button>
                            </center>
                            </Paper>
                            
                        </Grid>
                        <Grid item xs = {2}/>
                        <Grid item xs ={5}>
                            <Paper className={classes.paper}>
                                xs
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
        </div>
    )
  }

export default Admin 