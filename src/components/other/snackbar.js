import * as React from 'react';
import Snackbar from '@mui/joy/Snackbar';
import { keyframes } from '@mui/system';
import { useSelector } from 'react-redux';

const inAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const outAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

export default function SnackbarNotif({open, setOpen}) {

  const cartI=useSelector((state)=> state.list.cartItems);  
  const animationDuration = 600;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={4000}
        animationDuration={animationDuration}
        sx={{
          ...(open && {
            animation: `${inAnimation} ${animationDuration}ms forwards`,
          }),
          ...(!open && {
            animation: `${outAnimation} ${animationDuration}ms forwards`,
          }),
        }}
      >
         Added to the Cart
      </Snackbar>
    </div>
  );
}
