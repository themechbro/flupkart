import { Provider } from "react-redux";
import store from "./store";
import Appbar from "./components/appbar";
import Product from "./components/product";
import "./index.css";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./components/checkout";
import Error from "./components/other/error"
import CartCard from "./components/cartCard";
import Footer from "./components/other/footer";
import Sucess from "./components/other/successCheckout";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App(props) {
  return (
    <Provider store={store}>
    <Router>
      <div className="App"  >
        <Appbar />
        <div  >
        <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path="/cart" element={<CartCard />} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path="/order_success" element={<Sucess/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        </div>
        <Footer/>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
