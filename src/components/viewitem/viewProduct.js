import { useState, useRef } from "react";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/joy";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import BoltIcon from "@mui/icons-material/Bolt";
import "./viewItem.css";
import Sheet from "@mui/joy/Sheet";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Details from "./detail";

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
        <Details item={item} />
      </div>
    </div>
  );
}

export default ViewItem;
