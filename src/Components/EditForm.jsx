import TextField from '@material-ui/core/TextField';
import {Typography, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import AttachmentIcon from '@material-ui/icons/Attachment';


const useStyles = makeStyles((theme) => ({
    root: {
    '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch'
    },
    },

    uploadButton: {
        '&:hover': {
        background: "none",

        },
    },
    submit: {
        margin: theme.spacing(1),
        width: "10rem",
        display: "flex",
        alignSelf: "flex-end"
    },
    formBody: {
        display: "flex",
        flexDirection: "column",
    },
    textInput: {
       
    }
    
    
    
}))
const AddBookForm = () => {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} validate autoComplete="on">
                <div className={classes.formHeader}>
                    <Typography variant="h5">
                        Edit Book
                    </Typography>
                </div>
                <br /> 
                <div className={classes.formBody}>
                    <div >

                        <TextField required id="standard-required" label="New Title" style={{ width: "80%" }}/>
              
                    <TextField required id="standard-required" label="Description" style={{marginTop: "20px",  width: "100%"}} />
                    </div>
               
                    
                    
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" style={{ display: "none" }}/>
                    <label htmlFor="icon-button-file">
                    <IconButton className={classes.uploadButton}  aria-label="upload picture" component="span" style={{marginTop: "25px"}}>
                       <Typography >Upload Cover</Typography>  
                    <AttachmentIcon color="primary"/>
                    </IconButton>
                    </label>

                    <Button type="submit" size="medium" variant="contained"  color="primary" className={classes.submit}  style={{marginTop: "30px"}}>
                      Save Changes
                    </Button>

            </div>
            </form>
        </div>
    
     );
}
 
export default AddBookForm;
  