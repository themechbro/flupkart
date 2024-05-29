import React from 'react'
import { Typography } from '@mui/joy'
import './ad.css'
import Slider from 'react-slick';
import {Box, Card, CardMedia, IconButton } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const imgs=[
    "https://rukminim2.flixcart.com/fk-p-flap/1920/1080/image/1e31c9d65e3b4592.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1920/1080/image/cc633426b89ad841.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1920/1080/image/5483df11b3fc9f0b.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1920/1080/image/351fe32e7f128540.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1920/1080/image/f21c8c88a0bb63e0.png?q=20",
]

const NextArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.7)',
        },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
  
  const PrevArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.7)',
        },
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );




export default function Ad(){
    const sliderRef = React.useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade:true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
            responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      };


      


    return(
        <div className='container p-5' >
 <Box sx={{ width: '100%', margin: 'auto', position: 'relative' }} elevation={24}>
      <Slider ref={sliderRef} {...settings}>
        {imgs.map((image, index) => (
          <Card key={index}>
          <CardMedia
              component="img"
              image={image}
              alt={`Slide ${index + 1}`}
              sx={{
                height: 'auto',
                maxHeight: '400px', // Max height to prevent over-stretching
                width: '100%',
                objectFit: 'contain',
              }}
            />
          </Card>
        ))}
      </Slider>
    </Box>
        </div>
    )
}
