import * as React from 'react';
import { Typography } from '@mui/joy';
import './beseller.css'
import FirstCard from './firstcard';


export default function Seller(){
    return (    
        <div className='container py-5 w-100 h-100'>
        <div className='container py-5'>
        <div className='hero '>
        <Typography level='title-lg' sx={{padding:10, fontSize:40}}>Sell online with Flupkart</Typography>
        </div>
        <FirstCard/>
        </div>
        </div>
    )
}