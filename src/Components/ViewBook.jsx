import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';


import useStyles from '../styles';

import BookPreview from './BookPreview';


const ViewBook = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    // const [title, setTitle] = useState('');
    // const [details, setDetails] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div>
        <Button size="small" color="primary" onClick={handleOpen}>
                    View
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
            <div className={`${classes.paper} ${classes.viewPaper}`} style={{
            
          }}>
              <Grid>
                <BookPreview />
              </Grid>
             
          </div>
        </Fade>    
        </Modal>
        </div>
     );
}
 
export default ViewBook;