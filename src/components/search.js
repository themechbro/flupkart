import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Paper } from "@mui/material";
import InputBase from '@mui/material/InputBase';


export default function Search() {
  const dispatch = useDispatch();
  const dispatchSearch = debounce((searchValue) => {
    dispatch({ type: "SEARCHED_ITEM", payload: searchValue });
  }, 300);

  const handleChange = (event) => {
    const searchedValue = event.target.value;
    dispatchSearch(searchedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Paper
      component="form"
      sx={{
        width: 400,
        maxWidth: "100%",
        display: 'flex', alignItems: 'center'
      }}
      onSubmit={handleSubmit}
      elevation={3}  
    >
      <InputBase
        fullWidth
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        id="search"
        onChange={handleChange} 
        
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
