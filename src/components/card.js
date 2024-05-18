





import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function Cards( {image, title, description, price}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);


  function handleClick(image, title, description, price) {
    dispatch({ type: "ADD_CART" }, [dispatch]);
    dispatch({ type: "CART_ITEMS", payload: { image, title, price, description } }, [
      dispatch,
    ]);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    setOpen(true);
  }

  return (
    <div>
    <Card sx={{ width: 420, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={image}
            srcSet={image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-lg">{title}</Typography>
        <Typography level='body-sm'>{description}</Typography>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
         $ {price}
        </Typography>
        
      </CardContent>
      <CardOverflow>

      {loading? (
        <Button color="primary" loading variant="solid"></Button>
      ): <Button variant="solid" color="danger" size="lg" onClick={handleClick}>
          Add to cart
        </Button>}
        
      </CardOverflow>
    </Card>
    </div>
  );
}