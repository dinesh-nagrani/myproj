import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    productimg : {
        width: '50%',
        maxWidth: '100%',
    },
    wrapper: {
        textAlign: 'center',
        height: '100%',
        cursor: 'pointer'
    }
 });

function Tile(prop) {
  const { title, image } = prop;
  const classes = useStyles();


  return (
    <>
        <Grid item xs={12} md={3} >
            <Paper className= {classes.wrapper} elevation={3} >
                <img className={classes.productimg} src={image} alt="title" />
                <p> {title} </p>  
            </Paper>
        </Grid>
    </>
  );
}

export default Tile;
