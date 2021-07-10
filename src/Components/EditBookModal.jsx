import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AttachmentIcon from '@material-ui/icons/Attachment';
import TextField from '@material-ui/core/TextField';


import useStyles from '../styles';



const EditBook = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

  
  const reload=()=>window.location.reload();
    

  const handleOpen = () => {
    setOpen(true);
    // reload()
  };

  const handleClose = () => {
    setOpen(false);

  };
const EditBookForm = () => {
    

   
    const [closeButton, setCloseButton] = useState(false);

      const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
      const [bookCover, setBookCover] = useState('');
      

    const handleCloseButton = () => {
        setOpen(false);
      
    }
  

      const handleSubmit = (e) => {
        const book = { title, bookCover, description };
      e.preventDefault();
      
      fetch(`http://localhost:8000/books`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
      }).then(() => {
        console.log('book edited')
      });
      
      handleClose();
     
  }
  
    return (
        <div>
            <form className={classes.formroot} validate autoComplete="on" onSubmit={handleSubmit}>
                <div className={classes.formHeader}>
                    <Typography variant="h5">
                        Edit Book
            </Typography>
            <Button className={classes.iconX} onClick={handleCloseButton} />
                </div>
                <br /> 
                <div className={classes.editFormBody}>
                    <div >

                        <TextField required id="standard-required" label="New Title" style={{ width: "80%" }}  onChange={ (e) => setTitle(e.target.value)}/>
              
                    <TextField required id="standard-required" label="Description" style={{marginTop: "20px",  width: "100%"}} onChange={ (e) => setDescription(e.target.value)}/>
                    </div>
               
                    
                    
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" style={{ display: "none" }} onChange={(e) => setBookCover(e.target.files[0])}/>
                    <label htmlFor="icon-button-file">
                    <IconButton className={classes.editUploadButton}  aria-label="upload picture" component="span" style={{marginTop: "25px"}}>
                       <Typography >Upload Cover</Typography>  
                    <AttachmentIcon color="primary"/>
                    </IconButton>
                    </label>

                    <Button type="submit" size="medium" variant="contained"  color="primary" className={classes.submit}  style={{marginTop: "30px"}}>
                      Save
                    </Button>

            </div>
            </form>
        </div>
    
     );
}
  


    return (
        <div>
        <Button size="small" color="primary" onClick={handleOpen}>
                    Edit
        </Button>
            
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
        <Fade in={open}>
            <div className={classes.paper}>
             <EditBookForm />
             
          </div>
        </Fade>    
      </Modal>
        </div>
     );
}
 
export default EditBook;