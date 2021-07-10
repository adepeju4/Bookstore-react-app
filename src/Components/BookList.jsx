import { Typography, Card, CardActions, CardContent, CardMedia,  Grid, } from '@material-ui/core'
import useStyles from '../styles';
import EditBook from './EditBookModal';
import ViewBook from './ViewBook'




const Book = ({books, title}) => {
    const classes = useStyles();


   
    
    return (
        <div>

      
            <Typography variant="h5"  style={{margin: "30px 0", display: "flex", justifyContent: "center"}}>
                    {title}
            </Typography>
        <Grid container spacing={4} className={classes.cardContainer}>
            {books.map((item, i) => (
                <Grid item key={`book-${i}`} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <CardMedia className={classes.CardMedia} image={item.bookCover} title={item.title}>
                            </CardMedia>

                            <Typography gutterBottom variant="h5" className={classes.title}>
                                             {item.title}
                            </Typography>
                            <Typography className={classes.cardDetail}>
                                          {item.description}
                            </Typography>
                            <CardActions>
                                <ViewBook book={item} />
                                    <EditBook />
                                </CardActions>
                        </CardContent>
                     </Card>
                 </Grid>
            ))}
                
            </Grid>
          </div>
     );
}
 
export default Book;

 