import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import waitlistSuccess from "../assets/waitlistSuccess.webp"
interface ModalProps{
    message:string
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ffffff',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection: 'column',
  gap:2
};

export const InfoModal:React.FC<ModalProps> = ({message}:ModalProps)=> {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(true);

  setTimeout(() => {
    setOpen(false)
  }, 3000);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={waitlistSuccess} alt="" />
          <Typography id="modal-modal-description" sx={{ mt: 2 ,color:'#111827',textAlign:'center',fontStyle:'bold'}}>
            {message}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default InfoModal
