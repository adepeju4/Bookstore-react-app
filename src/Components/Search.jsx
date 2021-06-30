// import { useState } from "react";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../styles';
// import { books } from './BookList';
// import Book from "./BookList";


const SearchHandler = ({filterBooks}) => {
    const classes = useStyles();
    // const [searchBook, setSearchBook] = useState('');
   
    return (
         <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
              <InputBase
              onChange={filterBooks}
              placeholder="Find a book..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
     );
}
 
export default SearchHandler;