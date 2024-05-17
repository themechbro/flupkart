import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

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
    <Box
      component="form"
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        fullWidth
        label="Search"
        id="search"
        variant="outlined"
        onChange={handleChange}
      />
    </Box>
  );
}
