import React, { useEffect, useState } from "react";
import "./Banner.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Grid } from "@mui/material";

const options = [
  "Apartment",
  "Sub Let",
  "Garage",
  "Community Hall",
  "Commercial Space",
  "Farm House",
];
const area = [
  "Barisal",
  "Chittagong",
  "Dhaka",
  "Khulna",
  "Mymensingh",
  "Rajshahi",
  "Rangpur",
  "Sylhet",
];

const Banner = () => {
  const [search, setSearch] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(99999);
  const [category, setCategory] = useState(options[0]);
  const [areas, setAreas] = useState(area[0]);
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  const [value1, setValue1] = useState(area[0]);
  const [inputValue1, setInputValue1] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="banner">
      <div className="search">
      <form  action="" onSubmit={handleSearch}>
        <Grid container spacing={2}>
            <Grid item xs={7} md={9} sm={9}>
              <TextField
                sx={{ width: "100%", mb: 2 }}
                id="standard-basic"
                label="Search"
                variant="standard"
              ></TextField>
            </Grid>
            <Grid item xs={3} md={3} sm={3}>
              <Button type="submit" sx={{ width: "100%" }} variant="contained">
                Search
              </Button>
            </Grid>

            <Grid item xs={12} md={6} sm={6}>
              <Autocomplete
                sx={{ width: "100%" }}
                value={value1}
                onChange={(event, newValue) => {
                  setValue1(newValue);
                }}
                inputValue={inputValue1}
                onInputChange={(event, newInputValue) => {
                  setInputValue1(newInputValue);
                }}
                id="controllable-states-demo"
                options={area}
                renderInput={(params) => (
                  <TextField {...params} label="District" />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6} sm={6}>
              <Autocomplete
                style={{ width: "100%" }}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="category"
                options={options}
                renderInput={(params) => (
                  <TextField {...params} label="Category" />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6} sm={6}>
              <TextField
                sx={{ width: "100%" }}
                id="standard"
                type="number"
                label="Min Price"
                variant="standard"
              ></TextField>
            </Grid>
            <Grid item xs={12} md={6} sm={6}>
              <TextField
                style={{ width: "100%" }}
                type="number"
                id="standard2"
                label="Max Price"
                variant="standard"
              ></TextField>
            </Grid>
          
        </Grid>
        </form>
      </div>
    </div>
  );
};

export default Banner;
