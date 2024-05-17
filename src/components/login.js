import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import LinearProgress from '@mui/joy/LinearProgress';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';

export default function Login({open, onClose, onSubmit}) {
    const [value, setValue] = React.useState('');
  const minLength = 12;
  const dispatch = useDispatch();


  function handleClick(){
dispatch({type:"LOGGED_IN", payload:true})
  }

  return (
    <React.Fragment>
      <Modal open={open} onClose={onClose}>
        <ModalDialog>
          <DialogTitle level='title'>Login to Flupkart</DialogTitle>
          <DialogContent level='body'>Sign-in to Flupkart to shop!</DialogContent>
          <form
            onSubmit={onSubmit}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
        <TextField id="outlined-basic" required type='password' placeholder="Type in here…"
        value={value}
        onChange={(event) => setValue(event.target.value)} />
        <LinearProgress
        determinate
        size="sm"
        value={Math.min((value.length * 100) / minLength, 100)}
        sx={{
          bgcolor: 'background.level3',
          color: 'hsl(var(--hue) 80% 40%)',
        }}
      />
              </FormControl>
              <Button type="submit" variant="outlined" onClick={handleClick}>Login</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
