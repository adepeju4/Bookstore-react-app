import {useEffect, useState} from 'react'
import { CssBaseline, Container, Typography, Grid } from '@material-ui/core';

import SearchHandler from './Search';

import AddBook from './AddBookModal';
import Logout from './Breadcrumbs';



import Book from './BookList';
import useStyles from '../styles';

import LoadingGif from './Loading';
import useFetch from '../Hooks/useFetch';


const Home = () => {
const [books, setBooks] = useState([])  
const { data: allBooks, loading, error } = useFetch('http://localhost:4000/books/list');
const classes = useStyles();
const filterBooks  = (e) => {
  const searchTerm = e.target.value
  return setBooks(() => {
    return allBooks.filter(book => {
      let regex = new RegExp(searchTerm, 'gi')  
      return regex.test(book.title)
    })
  })
}
useEffect(()=>{
  setBooks(allBooks)
}, [allBooks])
  
  const Hero = ({ filterBooks }) => {
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

                <SearchHandler filterBooks={filterBooks} />
                </Grid>
              </Grid>
            </div>

            </Container>
     );
}
  return (
    <div className="App">
    <>
      <CssBaseline />
        <main className="main">
          <div className={classes.container}>
            <Hero filterBooks={filterBooks} />
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {error && <center>{error}</center>}
            {loading && <LoadingGif />}
            {books && <Book books={books} title="All Books!"/>}
            
          </Container>
        </main>





        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutter="bottom">
            Orefejo Adepeju
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            Software development Track
            <br />
            Stutern
          </Typography>
        </footer>
    </>
      
    </div>
  );
    
}
 
export default Home;