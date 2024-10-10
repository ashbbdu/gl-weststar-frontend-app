import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteShipment } from '../services/shippingApi';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   width: 400,
  maxWidth: "600px",
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto', 
};

export default function ConfirmationModal({ actionTitle , title , action , id}) {
  console.log(id , "id");
  const { token } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleDelete = () => {
    dispatch(deleteShipment(id , token))
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="secondary" style={{ marginLeft: '8px' }}>
         {actionTitle}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {title}
          </Typography>
          <Typography >
            <Button onClick={() => {
              setOpen(false)    
              handleDelete()
             
            }} variant='contained'>Confirm</Button>
            <Button onClick={handleClose} variant='contained'>Cancel</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
