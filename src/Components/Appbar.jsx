import { Typography, AppBar, Toolbar } from '@material-ui/core'
import {MenuBook} from '@material-ui/icons';

import useStyles from '../styles';
const TopBar = () => {
      const classes = useStyles();
    return (
        <AppBar position="relative">
            <Toolbar>
                <MenuBook className={classes.icon}> 
                </MenuBook>
                <Typography variant="h6"> 
                    Dee's Bookstore
                </Typography>
              
                
            </Toolbar>
          </AppBar>
     );
}
 
export default TopBar;