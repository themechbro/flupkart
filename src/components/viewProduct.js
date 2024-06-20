import { useState, useRef } from "react";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/joy";
import Chip from "@mui/joy/Chip";
import GradeIcon from "@mui/icons-material/Grade";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import BoltIcon from "@mui/icons-material/Bolt";
import Divider from "@mui/material/Divider";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import "./viewItem.css";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Rating from "@mui/material/Rating";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Slider from "react-slick";

function ViewItem() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.list.viewItem);
  const imageRef = useRef();
  const zoomRef = useRef();

  const [zoomStyle, setZoomStyle] = useState({});
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    dispatch({ type: "ADD_CART" }, [dispatch]);
    dispatch(
      {
        type: "CART_ITEMS",
        payload: {
          image: item.images,
          title: item.title,
          description: item.description,
          price: item.price,
        },
      },
      [dispatch],
    );
  }
  function handleMouseMove(e) {
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({
      backgroundImage: `url(${item.images})`,
      backgroundPosition: `${x}% ${y}%`,
      display: "block",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    });
  }

  function handleMouseLeave() {
    setZoomStyle({ display: "none" });
  }

  function handleBuy() {
    setOpen(true);
  }

  return (
    <div className="container p-5">
      <div className="view-item container py-md-5 py-1 row ">
        <div className="col-md-4 col-12 ">
          <img
            src={item.images}
            className="img-fluid border shadow-lg product-image"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={imageRef}
          />
          <div
            className="img-zoom-result"
            ref={zoomRef}
            style={zoomStyle}
          ></div>

          <div className="button-div p-md-3 p-0 w-100 d-flex flex-md-row flex-column justify-content-evenly flex-wrap ">
            <Button
              size="lg"
              sx={{ backgroundColor: "#ff9f00", color: "#FFF" }}
              startDecorator={<Add />}
              onClick={handleClick}
            >
              Add to cart
            </Button>

            <Button
              size="lg"
              sx={{ backgroundColor: "#fb641b", color: "#FFF" }}
              startDecorator={<BoltIcon />}
              onClick={handleBuy}
            >
              Scan to Buy
            </Button>
            <Modal
              aria-labelledby="modal-title"
              aria-describedby="modal-desc"
              open={open}
              onClose={() => setOpen(false)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  maxWidth: 500,
                  borderRadius: "md",
                  p: 3,
                  boxShadow: "lg",
                }}
              >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Typography
                  component="h2"
                  id="modal-title"
                  level="h4"
                  textColor="inherit"
                  fontWeight="lg"
                  mb={1}
                >
                  QR CODE
                </Typography>
                <img src={item.meta.qrCode} />
                <Typography level="body-lg">{item.meta.barcode}</Typography>
              </Sheet>
            </Modal>
          </div>
        </div>

        <div className="col-md-8 col-12">
          <div className="p-md-5 p-1">
            <Typography level="h3" sx={{ marginBottom: 2 }}>
              {item.title}
            </Typography>
            <Chip color="success" size="sm" startDecorator={<GradeIcon />}>
              <Typography level="body-lg">{item.rating}</Typography>
            </Chip>
            <Typography
              level="body-sm"
              color="neutral"
              sx={{ marginBottom: 5 }}
            >
              {item.reviews.length} Ratings/ Reviews
            </Typography>
            <Typography level="body-lg" sx={{ marginBottom: 2 }}>
              {item.description}
            </Typography>
            <Grid container spacing={0.5} sx={{ flexGrow: 1 }}>
              <Grid xs={7}>
                <Typography level="h1">${item.price}</Typography>
              </Grid>

              <Grid xs={5}>
                <Typography
                  level="title-lg"
                  sx={{ color: "green", marginTop: 2 }}
                >
                  {item.discountPercentage}% off
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
                  {item.warrantyInformation}
                </Typography>
              </div>
            </Grid>

            <Grid xs={12} md={4}>
              <div className="p-md-5 p-1 availability ">
                <Typography level="h4">Availability</Typography>
                <Typography level="body-lg" padding={2}>
                  {item.availabilityStatus}
                </Typography>
              </div>
            </Grid>

            <Grid xs={12} md={4}>
              <div className="p-md-5 p-1 shipping ">
                <Typography level="h4">Shipping</Typography>
                <Typography level="body-lg" padding={2}>
                  {item.shippingInformation}
                </Typography>
              </div>
            </Grid>
          </Grid>
          <div className="p-md-5 p-1">
            <Card variant="outlined" className="shadow-lg">
              <CardContent>
                <Typography level="h4">Reviews</Typography>
                {item.reviews.map((i) => {
                  return (
                    <Sheet variant="outlined">
                      <Chip
                        color="success"
                        size="sm"
                        startDecorator={<GradeIcon />}
                      >
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
        </div>
      </div>
    </div>
  );
}

export default ViewItem;
