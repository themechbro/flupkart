import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Rating from "@mui/material/Rating";
import Input from "@mui/joy/Input";
import { Typography } from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Chip from "@mui/joy/Chip";
import GradeIcon from "@mui/icons-material/Grade";
import { useState } from "react";
import Button from "@mui/joy/Button";

export default function Reviews(item) {
  return (
    <div className="p-md-5 p-1">
      <Card variant="outlined" className="shadow-lg">
        <CardContent>
          <Typography level="h4">Reviews</Typography>
          {item.item.reviews.map((i) => {
            return (
              <Sheet variant="outlined">
                <Chip color="success" size="sm" startDecorator={<GradeIcon />}>
                  {i.rating}{" "}
                </Chip>
                <Typography level="title-md" padding={1}>
                  {i.comment}
                </Typography>
                <Typography color="neutral" level="body-xs" padding={1}>
                  <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid xs={4}> {i.reviewerName}</Grid>
                    <Grid xs={8}>
                      <CheckCircleIcon fontSize="xs" /> Certified Buyer
                    </Grid>
                  </Grid>
                </Typography>
              </Sheet>
            );
          })}
        </CardContent>
      </Card>

      <Card variant="outlined" className="shadow-lg mt-3">
        <CardContent>
          <form>
            <Rating />
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={8}>
                <Input variant="outlined" placeholder="Add a review" />
              </Grid>
              <Grid xs={4}>
                <Button variant="outlined">Add Review</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
