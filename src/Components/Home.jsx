import {useEffect, useState} from 'react'
import { CssBaseline, Container, Typography } from '@material-ui/core';


import Hero from './Hero';
import Book from './BookList';
import useStyles from '../styles';

import LoadingGif from './Loading';
import useFetch from '../Hooks/useFetch';


const Home = () => {
const [books, setBooks] = useState([])  
const { data: allBooks, loading, error } = useFetch('http://localhost:8000/books');
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