import React from 'react';
import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import LinearProgress from '@mui/joy/LinearProgress';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import Warning from '@mui/icons-material/Warning';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from '@mui/material';
import { CardContent } from '@mui/joy';

export default function Error(){


    return(
        <div className='container p-5 d-flex flex -column justify-content-center align-items-center'>
        <Alert
        component={Card}
        size='lg'
        variant="soft"
        color="danger"
        invertedColors
        startDecorator={
          <CircularProgress size="lg" color="danger">
            <Warning />
          </CircularProgress>
        }
        sx={{ alignItems: 'center', gap: '2rem' }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography level="title-md" >404 Error</Typography>
          <Typography level="body-md" component={CardContent}>
            The page which you are looking for is deleted or has been tempoarirly taken down. Contact Customer Support.
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button variant="outlined" size="sm" component={Link} to='https://github.com/themechbro'>
              Contact Customer Support
            </Button>
            <Button variant="solid" size="sm" component={Link} to="/">
              Try again
            </Button>
          </Box>
        </Box>
      </Alert>
      </div>
    )
}