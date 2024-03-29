import React, { useEffect, useState } from "react";
import "./Banner.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Grid } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
  const [max, setMax] = useState(999999999999999);
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  const [value1, setValue1] = useState(area[0]);
  const [inputValue1, setInputValue1] = useState("");
  const [text, setText] = useState([])
  const history = useHistory();


  const minRef = (e) => {
    setMin(e.target.value);
  };
  const maxRef = (e) => {
    setMax(e.target.value);
  };


  const handleSearch = (e) => {
    const data = { search, min, max, category: value, areas: value1 }
    history.push({ pathname: '/find', state: data })
    e.preventDefault();
  };


  useEffect(() => {
    fetch('https://we-hire-database.onrender.com/addrent')
      .then(res => res.json())
      .then(data => { setText(data) })
  }, [])
  return (
    <div className="banner">

      <div className="search">
        <form onSubmit={handleSearch}>
          <Grid container spacing={2}>
            <Grid item xs={7} md={9} sm={9}>
              <Autocomplete
                freeSolo
                sx={{ width: "100%", mb: 2 }}
                disableClearable
                options={text.map((option) => option.name)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search"
                    variant="standard"
                    onBlur={e => setSearch(e.target.value)}
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={3} md={3} sm={3}>
              <Button type="submit" sx={{ width: "100%", backgroundColor: '#09344dc2' }} variant="contained">
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
                onChange={minRef}
                sx={{ width: "100%" }}
                id="standard"
                type="number"
                label="Min Price"
                variant="standard"
              ></TextField>
            </Grid>
            <Grid item xs={12} md={6} sm={6}>
              <TextField
                onChange={maxRef}
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
