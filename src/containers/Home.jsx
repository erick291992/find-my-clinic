import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
	flexGrow: 1,
	// width: '100%',
	// height: '100%'
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
	color: theme.palette.text.secondary,
	width: '50%',
	height: 100,
	margin: 0,
	// maxWidth: '50%',
	// maxHeight: 500,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
		<Paper className={classes.paper}>xs=6</Paper>
      {/* <Grid container spacing={0}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid> */}
    </div>
  );
}