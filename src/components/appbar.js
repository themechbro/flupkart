import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Button } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from "react-redux";

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

function Appbar(props){
    const matches1 = useMediaQuery('(min-width:1100px)');
    const matches2= useMediaQuery('(min-width:800px)')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const cart = useSelector(state => state.cart);
    console.log(cart)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
  
      const handleClose = () => {
        setAnchorEl(null);
      };

    return(
        <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar  sx={{backgroundColor:'#FFF', padding:1}}  >
            <Toolbar className="container" sx={{display:'flex', justifyContent:'space-evenly'}}>
              <Typography variant="h6" component="div" sx={{color:'#000'}}>
                Flupkart
              </Typography>
              

    {matches1? (<Box
              component="form"
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Search" id="search" variant="outlined" />
    </Box>):(<></>)}
              
  {matches2?(<React.Fragment><Button sx={{color:"#000"}} color="secondary" startIcon={<AccountCircleIcon sx={{color:"#000"}}/>} >Login</Button>
{cart>0 ?
<Badge badgeContent={1} color="secondary"><Button sx={{color:"#000"}} variant="secondary" startIcon={<ShoppingCartIcon sx={{color:"#000"}}/>}  >Cart</Button></Badge>: 
<Button sx={{color:"#000"}} variant="secondary" startIcon={<ShoppingCartIcon sx={{color:"#000"}}/>}  >Cart</Button> 
}
<Button sx={{color:"#000"}} variant="secondary" startIcon={<StorefrontIcon sx={{color:'#000'}}/>}  >Become a Seller</Button>
</React.Fragment>):( <React.Fragment>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="inherit"
                  >
                    <MenuIcon sx={{color:'#000'}}></MenuIcon>
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Button sx={{color:"#000"}} color="secondary" startIcon={<AccountCircleIcon sx={{color:"#000"}}/>} className="nav-item">Login</Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button sx={{color:"#000"}} variant="secondary" startIcon={<ShoppingCartIcon sx={{color:"#000"}}/>}  className="nav-item">Cart</Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button sx={{color:"#000"}} variant="secondary" startIcon={<StorefrontIcon sx={{color:'#000'}}/>}  className="nav-item">Become a Seller</Button>
                    </MenuItem>
                  </Menu>
                </React.Fragment>)}
    
            </Toolbar>
          </AppBar>
        </HideOnScroll>

        
        <Toolbar />
      </React.Fragment>
    )
}

export default Appbar