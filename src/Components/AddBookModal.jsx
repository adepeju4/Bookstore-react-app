import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {Typography} from '@material-ui/core'


import useStyles from '../styles';



const AddBook = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const reload=()=>window.location.reload();
  
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  reload();
    
  };




  const AddBookForm = () => {

    const reload=()=>window.location.reload();
    const [closeButton, setCloseButton] = useState(false);
    const [title, setTitle] = useState('');
    const [bookCover, setBookCover] = useState('');
    const [description, setDescription] = useState('');

    
    const handleCloseButton = () => {
        setOpen(false);
      
    }

    const handleSubmit = (e) => {
        const book = { title, bookCover, description };
      e.preventDefault();
      
      fetch('http://localhost:8000/books', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
      }).then(() => {
        console.log('new book added')
      });
      
      handleClose();
     
    }

    

    const classes = useStyles();



    return (
        <div>
            <form className={classes.formroot} validate autoComplete="on" onSubmit={handleSubmit}>
                <div className={classes.formHeader}>
                    <Typography variant="h5">
                        Add New Book
                    </Typography>
                    <Button className={classes.iconX} onClick={handleCloseButton} />
                </div>
                <br /> 
            <div className={classes.formBody}>
               
                    <TextField required id="standard-required" label="Book Title" style={{ width: "80%" }} onChange={ (e) => setTitle(e.target.value)}/>
              
                    <TextField required id="standard-required" label="Description" style={{marginTop: "20px", width: "100%"}} onChange={ (e) => setDescription(e.target.value)}/>
                    
                    
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={(e) => setBookCover(e.target.files[0])}  style={{marginTop: "25px"}}/>
                    <label htmlFor="icon-button-file">
                    {/* <IconButton className={classes.uploadButton}  aria-label="upload picture" component="span">
                       <Typography >Upload Book Cover</Typography>  
                    <AttachmentIcon color="primary"/>
                    </IconButton> */}
                    </label>

                    

                    <Button type="submit" size="medium" variant="contained"  color="primary" className={classes.submit}  style={{marginTop: "30px"}}>
                      Add
                    </Button>

            </div>
            </form>
        </div>
    
     );
}



    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleOpen}>
                    Add New Book
        </Button>
            
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
          onClose={handleClose}
          onExit={reload}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
        <Fade in={open}>
            <div className={classes.paper}>
              <AddBookForm />
             
              
          </div>
        </Fade>    
      </Modal>
        </div>
     );
}
 
export default AddBook;
