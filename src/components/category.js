import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const categories = [
  "ALL",
  "beauty",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "kitchen-accessories ",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accesories"
];

export default function Categories({ selectedCategory, setSelectedCategory }) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Sort by category</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={selectedCategory}
          onChange={(event) => {
            const value =
              event.target.value === "ALL" ? "" : event.target.value;
            setSelectedCategory(value);
          }}
          input={<OutlinedInput label="Sort by category" />}
        >
          {categories.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
