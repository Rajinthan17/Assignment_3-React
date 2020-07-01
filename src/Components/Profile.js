import React, { Component } from "react";
import { Typography, Card, CardContent, Paper, Grid } from '@material-ui/core';


const style = {
  root: {
    minWidth: 275,
    backgroundColor:'#263238',
    marginTop: 20,
    height: 400,
    color: '#e0f7fa'
  },
  title: {
    fontSize: 14,
  },
  paper: {
    spacing: 2,
    textAlign: 'left',
    backgroundColor: '#263238',
    color: '#e0f7fa'
  },
}

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        username: localStorage.getItem('username'),
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        roles: localStorage.getItem('roles'),
      }
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <Paper>
              <Card style={style.root} variant="outlined">
                <CardContent>
                  <Typography style={style.title} gutterBottom>
                    <h1>Profile : {currentUser.username}</h1>
                    <p><strong>Token:</strong>{" "}{Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10)}</p>
                    <p><strong>Id:</strong>{" "}{currentUser.id}</p>
                    <p><strong>Email:</strong>{" "}{currentUser.email}</p>
                    <p><strong>Authorities:</strong>{" "}{currentUser.roles}</p>
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={4}/>
        </Grid>
      </React.Fragment>
    );
  }
}

