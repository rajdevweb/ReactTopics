import React from 'react'
import './App.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function App() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  
  
 function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;

}


  return (
    <>
      <ButtonUsage className="bg-red-500 border border-red-500" />
      <Button variant="contained">Hello world</Button>
      <div className='bg-red-500 border border-red-500'>
        krishna
      </div>

      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

         <div>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    </>
  )
}

export default App
