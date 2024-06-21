import * as React from "react";
import Reviews from "./reviews";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import Divider from "@mui/material/Divider";
import GradeIcon from "@mui/icons-material/Grade";

export default function Details(item) {
  return (
    <div className="col-md-8 col-12">
      <div className="p-md-5 p-1">
        <Typography level="h3" sx={{ marginBottom: 2 }}>
          {item.item.title}
        </Typography>
        <Chip color="success" size="sm" startDecorator={<GradeIcon />}>
          <Typography level="body-lg">{item.item.rating}</Typography>
        </Chip>
        <Typography level="body-sm" color="neutral" sx={{ marginBottom: 5 }}>
          {item.item.reviews.length} Ratings/ Reviews
        </Typography>
        <Typography level="body-lg" sx={{ marginBottom: 2 }}>
          {item.item.description}
        </Typography>
        <Grid container spacing={0.5} sx={{ flexGrow: 1 }}>
          <Grid xs={7}>
            <Typography level="h1">${item.item.price}</Typography>
          </Grid>

          <Grid xs={5}>
            <Typography level="title-lg" sx={{ color: "green", marginTop: 2 }}>
              {item.item.discountPercentage}% off
            </Typography>
          </Grid>
        </Grid>
        <Divider color="black" />
      </div>
      <Grid container spacing={0.5} marginTop={3}>
        <Grid xs={12} md={4}>
          <div className="p-md-5 p-1 waranty ">
            <Typography level="h4">Waranty</Typography>
            <Typography level="body-lg" padding={2}>
              {item.item.warrantyInformation}
            </Typography>
          </div>
        </Grid>

        <Grid xs={12} md={4}>
          <div className="p-md-5 p-1 availability ">
            <Typography level="h4">Availability</Typography>
            <Typography level="body-lg" padding={2}>
              {item.item.availabilityStatus}
            </Typography>
          </div>
        </Grid>

        <Grid xs={12} md={4}>
          <div className="p-md-5 p-1 shipping ">
            <Typography level="h4">Shipping</Typography>
            <Typography level="body-lg" padding={2}>
              {item.item.shippingInformation}
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Reviews item={item.item} />
    </div>
  );
}
