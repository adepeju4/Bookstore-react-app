import { Container, Typography } from '@material-ui/core'
import useStyles from '../styles';


const BookPreview = () => {
    const classes = useStyles();
    // const { bookCover, title, description } = books;

  
    return (
        <Container >
        <div className="preview" style={{
                display: "flex",
                height: "85vh",
                flexDirection: "column"
        }}>
            
                <div className="header">
                    <center>
                        <img src="https://images.unsplash.com/photo-1622495807835-858ac1da986d?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="title" className={classes.previewImage}/>
                    </center>
                </div>
                <div className="body">

                    <Typography variant="h5" style={{paddingBottom: "1px"}}>
                        Title
                        <hr />
                    </Typography>
                    
                    <Typography variant="subtitle1" className="title">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, possimus totam molestiae eaque repellat veniam nam labore, cupiditate vel voluptatum aperiam, minus iste consequuntur. Sit animi rem assumenda deleniti odit.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, cum porro dolores reiciendis ab laboriosam maxime consequatur consequuntur veritatis velit excepturi atque ea officiis autem perspiciatis, adipisci suscipit quos inventore!
                            Atque ea adipisci dolores voluptas facere quo, numquam amet explicabo ut voluptatem dolor culpa at perspiciatis minima, eius asperiores optio quidem iusto minus, accusantium quis quam ipsa. Eius, at nihil.
                    </Typography>

                </div>
           


        </div>
                    </Container>
     );
}
 
export default BookPreview;