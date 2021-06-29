import { Typography,  Grid,  Container } from '@material-ui/core'
import SearchHandler from './Search';
import useStyles from '../styles';
import AddBook from './AddBookModal';
import Logout from './Breadcrumbs';



const Hero = () => {
  const classes = useStyles();
    return (
      <Container max-width="sm">
        <Logout />
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Book Log
              </Typography>

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </Typography>
            
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <AddBook />
                </Grid>
                <Grid item>

                <SearchHandler />
                </Grid>
              </Grid>
            </div>

            </Container>
     );
}
 
export default Hero;
