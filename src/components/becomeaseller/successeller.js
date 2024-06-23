import * as React from 'react'
import Slider from 'react-slick'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {CarouselData} from './items';
import {Box, Card, IconButton } from '@mui/material'
import Avatar from '@mui/material';



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



export default function SuccessSeller(){
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


    return (  
        <Box sx={{ width: '100%', margin: 'auto', position: 'relative' }} elevation={24}>
        <Slider ref={sliderRef} {...settings}>
        {CarouselData.map((c)=>{
            return (
                <Card key={index}>

                </Card>
            )
        })}
        </Slider>
        </Box>
      )
}