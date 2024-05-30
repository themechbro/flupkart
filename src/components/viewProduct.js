import React, { useState, useRef } from "react";
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

function ViewItem() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.list.viewItem);
  const imageRef = useRef();
  const zoomRef = useRef();

  const [zoomStyle, setZoomStyle] = useState({});

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

  return (
    <div className="container p-5">
      <div className="view-item container py-md-5 py-1 row ">
        <div className="col-md-6 col-12 position-relative ">
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

          <div className="button-div p-md-3 p-0 w-100 d-flex flex-md-row flex-column justify-content-evenly  ">
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
            >
              Buy Now
            </Button>
          </div>
        </div>
        <div className="col-md-6 col-12">
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
            <Typography level="h2" sx={{ marginBottom: 2 }}>
              ${item.price}
            </Typography>
            <Divider color="black" />
          </div>
          <div className="p-md-5 p-1">
            <Card variant="outlined">
              <CardContent>
                <Typography level="h4">Reviews</Typography>
                {item.reviews.map((i) => {
                  return (
                    <div>
                      <Chip
                        color="success"
                        size="sm"
                        startDecorator={<GradeIcon />}
                      >
                        {i.rating}{" "}
                      </Chip>
                      <Typography level="body-lg" padding={2}>
                        {i.comment}
                        <Divider color="black" />
                      </Typography>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewItem;
