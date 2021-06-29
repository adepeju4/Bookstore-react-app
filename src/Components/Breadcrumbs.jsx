// import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';

import useStyles from '../styles';

const Logout = () => {
    const classes = useStyles();
    return (
    <Container className={classes.logout}>
          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb} >
    
       <Link color="primary" href="/" className={classes.homelink} >
        Home
      </Link>
      <Link color="inherit" href="/" className={classes.logoutLink}>
        logout
      </Link>
     
    </Breadcrumbs>  
    </Container>
    
     );
}
 
export default Logout;