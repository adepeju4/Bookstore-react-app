import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
        display: 'flex',
        height: "200px",
        justifyContent: "center",
        alignItems: "center",
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    },
   
}));

export default function LoadingGif() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
         
          <Typography variant="body1">
              Loading books
        </Typography>
          <CircularProgress className={classes.progress}/>
    </div>
  );
}



