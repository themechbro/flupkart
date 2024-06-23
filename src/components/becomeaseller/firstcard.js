import * as React from 'react'
import Box from '@mui/material/Box';
import {Items} from './items';
import { Grid } from '@mui/material';


export default function FirstCard(){
 
    return (
        <div className='card-deck shadow-sm'>
<Box
      sx={{
        display:'flex',
        justifyContent:'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        color: 'text.secondary',
        '& svg': {
          m: 1,
        },
      }}
      component={Grid}
      container
      spacing={0.3}
    >

    {Items.map((i)=>{
        return (
            <Grid xs={12} md={2} >
            <div className='d-flex flex-column justify-content-center align-items-center py-2 '>
            {i.icon}
{i.title}
</div>
</Grid>

        )
    })}
    </Box>
</div>
    )
}