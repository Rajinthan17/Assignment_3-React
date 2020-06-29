import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
      backgroundColor:'#263238',
      color: 'white'
    },
});

function BottomBar() {
    const classes = useStyles();
    let Year = new Date().getFullYear();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Typography variant="overline" align="center">
                {Year}-{Year+1}, All Rights Reserved by Rajinthan
            </Typography>
        </AppBar>
    )
}

export default BottomBar