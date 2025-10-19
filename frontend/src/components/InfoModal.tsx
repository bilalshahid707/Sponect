import React, { useState } from "react";
import Modal from '@mui/material/Modal';

import waitlistSuccess from "../assets/waitlistSuccess.webp"

interface ModalProps{
    message:string
}


export const InfoModal:React.FC<ModalProps> = ({message}:ModalProps)=> {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30%] rounded-4xl bg-white p-md flex flex-col items-center justify-center gap-md">
          <img src={waitlistSuccess} className="w-full h-full" alt="waitlist" />
          <h1 className="heading-teriary font-bold text-dark">
            {message}
          </h1>
          <button onClick={handleClose} className="btn-primary text-center cursor-pointer">Got it!</button>
        </div>
      </Modal>
    </div>
  );
}

export default InfoModal
