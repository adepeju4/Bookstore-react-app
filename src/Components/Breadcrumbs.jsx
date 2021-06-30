// import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';
import { Container } from '@material-ui/core';

import useStyles from '../styles';

const Logout = () => {
    const classes = useStyles();
    return (
    <Container className={classes.logout}>
          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb} >
    
       <Link to="/books" className={classes.homelink} >
        Home
      </Link>
      <Link to="/signup" className={classes.logoutLink}>
        logout
      </Link>
     
    </Breadcrumbs>  
    </Container>
    
     );
}
 
export default Logout;