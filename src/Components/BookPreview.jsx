import { Container, Typography } from '@material-ui/core'
import useStyles from '../styles';


const BookPreview = ({title, desc, cover}) => {
    const classes = useStyles();

  
    return (
        <>


        <Container >
        <div className="preview" style={{
                display: "flex",
                flexDirection: "column"
        }}>


            
                <div className="header">
                    <center>
                        <img src={cover} alt={title}className={classes.previewImage}/>
                    </center>
                </div>
                <div className="body">

                    <Typography variant="h5" style={{paddingBottom: "1px"}}>
                        {title}
                        <hr />
                    </Typography>
                    
                    <Typography variant="subtitle1" className="title">
                    {desc}    
                    </Typography>

                </div>
           


        </div>
                    </Container>
    </>
     );
}
 
export default BookPreview;