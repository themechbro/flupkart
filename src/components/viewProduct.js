import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/joy";
import Chip from '@mui/joy/Chip';
import GradeIcon from '@mui/icons-material/Grade';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import BoltIcon from '@mui/icons-material/Bolt';
import Divider from '@mui/material/Divider';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';




function ViewItem() {
  const item = useSelector((state) => state.list.viewItem);

  return (
    <div className="container p-5">
      <div className="view-item container py-5 row ">
        <div className="col-md-6 col-12 position-relative ">
          <img src={item.images} className="img-fluid border shadow-lg" />
          <div className="button-div p-3 w-100 d-flex flex-md-row flex-column justify-content-evenly  ">
<Button   size="lg" sx={{backgroundColor:'#ff9f00', color:'#FFF'}} startDecorator={<Add />}>Add to cart</Button>
<Button size="lg"   sx={{backgroundColor:'#fb641b', color:'#FFF'}} startDecorator={<BoltIcon />}>Buy Now</Button>
</div>
        </div>
        <div className="col-md-6 col-12">
        <div className="p-5">
           <Typography level="h3" sx={{marginBottom:2}} >{item.title}</Typography>
           <Chip color="success" size="sm" startDecorator={<GradeIcon/>}><Typography level="body-lg" >{item.rating}</Typography></Chip>
           <Typography level="body-sm" color="neutral" sx={{marginBottom:5}}>{item.reviews.length} Ratings/ Reviews</Typography>
          <Typography level="body-lg"  sx={{marginBottom:2}}>{item.description}</Typography>
           <Typography level="h2"  sx={{marginBottom:2}}>${item.price}</Typography>
           <Divider color='black'/>
           </div>
           <div className="p-5">
           <Card variant="outlined" >
        <CardContent>
          <Typography level="h4">Reviews</Typography>
          {item.reviews.map(i=>{
            return(
                <div>
                <Chip color="success" size="sm" startDecorator={<GradeIcon/>}>{i.rating} </Chip> 
                <Typography level="body-lg" padding={2}>{i.comment} 
                <Divider color='black'/>
                </Typography> 
                </div> 
            )
          }  )}
          
        </CardContent>
      </Card>
      </div>
        </div>
      </div>

    </div>
  );
}

export default ViewItem;
