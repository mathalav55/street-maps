import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
  fab: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SimpleModal() {
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
       <Fab color="primary" id="add-icon" aria-label="Add" className={classes.fab} onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div id="form" style={modalStyle} className={classes.paper}>
          <div className="form-contents">
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="name"
                  label="name"
                  fullWidth
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                />
                <TextField
                  id="location"
                  label="location"
                  fullWidth
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                />
                 <TextField
                  id="support"
                  label="support needed"
                  fullWidth
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                />
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" component="span" className={classes.button}>
                    Upload image
                  </Button>
                </label>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}