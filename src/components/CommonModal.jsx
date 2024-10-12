import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "600px",
  width :  "100%",
  maxHeight: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

export default function CommonModal({ component: Component, title, action }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} sx={{marginBottom : 1}}>
        {action}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{display : "flex" , justifyContent : "space-between"}}>
            <div>
                {title}
            </div>
            <div onClick={handleClose} style={{cursor : "pointer"}}>
            <CloseIcon />
          </div>
          </Typography>
          <Component open={open} setOpen={setOpen} onClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
