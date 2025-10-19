import React,{useState} from 'react'
import Alert from "@mui/material/Alert"
import Collapse from "@mui/material/Collapse"

interface AlertProps {
  message:string,
  severity:"error"|"success"
}
export const BasicAlert:React.FC<AlertProps> = ({message,severity}) => {

  const [open,setOpen] = useState(true)

  setTimeout(() => {
    setOpen(false)
  }, 5000);
  return (
    <>
    <Collapse in={open} >
    <Alert onClose={()=>{setOpen(false)}} variant='filled' className="w-max rounded-4xl fixed left-[50%] translate-x-[-50%] top-5 z-50" severity={severity}>{message}</Alert>
    </Collapse>
    </>
  )
}

export default BasicAlert
