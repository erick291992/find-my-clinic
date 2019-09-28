import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		// color: '#2196f3',
		// width: '100%',
		// position: 'absolute',
		// margin: '0',
		// top: 0,
		// overflowY: 'hidden'
	},
	card: {
		height: '100%',
		// height:400,
		width: '100%',
		// display: 'flex',
		// overflow: 'visible',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
}));

export default function Clinic(props) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.cardMedia}
				image="https://source.unsplash.com/random"
				title="Image title"
			/>
			<CardContent className={classes.cardContent}>
				<Typography gutterBottom variant="h5" component="h2">
					{props.clinic.name}
         </Typography>
				<Typography>
					{props.clinic.address}
        </Typography>
				<Typography>
				{/* {console.log(props.clinic)} */}
				{/* {console.log(JSON.stringify(props.clinic.location))} */}
					{/* lat:{JSON.stringify(props.clinic.location)} */}
        </Typography>
				<Typography>
					{/* lng:{props.clinic.location.lng} */}
        </Typography>
				<Typography>
					This is a media card. You can use this section to describe the content.
        </Typography>
			</CardContent>
			<CardActions>
				<Button size="small" color="primary">
					View
        </Button>
				<Button size="small" color="primary">
					Edit
        </Button>
			</CardActions>
		</Card>
	);
}