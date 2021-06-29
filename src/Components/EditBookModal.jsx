import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';

import useStyles from '../styles';
import EditBookForm from './EditForm';


const EditBook = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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