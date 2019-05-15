import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  cover: {
    width: 151,
  },
});

function AlignItemsList(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://singularityhub.com/wp-content/uploads/2019/02/Ai-startups-tech-Peter-Rejceck-shutterstock-1290615073-1068x601.jpg" />
        </ListItemAvatar> */}
        {/* <CardMedia
          className={classes.cover}
          component="img"
          image="https://singularityhub.com/wp-content/uploads/2019/02/Ai-startups-tech-Peter-Rejceck-shutterstock-1290615073-1068x601.jpg"
          title="Live from space album cover"
        /> */}
        <ListItemText
          primary="Brunch is this weekend?"
          secondary={
            <React.Fragment>
              {/* <Typography component="span" className={classes.inline} color="textPrimary">
                Ali Connors
              </Typography> */}
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="" />
        </ListItemAvatar> */}
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="" />
        </ListItemAvatar> */}
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);
