import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  MenuItem,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import useAuth from "../../hook/useAuth";
import './AddREnt.css'
const AddRent = () => {
  const options = [
    "Apartment",
    "Sub Let",
    "Garage",
    "Community Hall",
    "Commercial Space",
    "Farm House",
  ];
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [url, seturl] = useState("");
  const [location, setlocation] = useState("");
  const [description, setdescription] = useState("");
  const [pubName, setpubName] = useState(user.displayName);
  const [number, setnumber] = useState("");
  const [price, setprice] = useState(0);
  const [category, setCategory] = React.useState(options[0]);

  const nameRef = (e) => {
    setName(e.target.value);
  };
  const urlRef = (e) => {
    seturl(e.target.value);
  };
  const priceRef = (e) => {
    setprice(e.target.value);
  };
  const locationRef = (e) => {
    setlocation(e.target.value);
  };
  const descriptionRef = (e) => {
    setdescription(e.target.value);
  };
  const pubNameRef = (e) => {
    setpubName(e.target.value);
  };
  const numberRef = (e) => {
    setnumber(e.target.value);
  };
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleSubmit = (e) => {
    const newCategory = {
      name,
      url,
      price,
      location,
      description,
      pubName,
      number,
      category,
    };
    console.log(newCategory);
    fetch("http://localhost:5000/addrent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Post Added");
          e.target.reset();
        }
        console.log(data);
      });
  };

  return (
    <div className="back">
      <Container sx={{ p: 10 }}>
        <Typography
          variant="h2"
          sx={{ color: "white", fontWeight: "bold", mb: 10 }}
        >
          Post Ad
        </Typography>

        <form action="">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sm={6}>
              <TextField
                sx={{ width: "50%", mb: 3 }}
                onChange={pubNameRef}
                id="st"
                label="Publisher Name"
                value={pubName}
              />
              <br></br>
              <TextField
                sx={{ width: "50%" }}
                id="stan"
                onChange={numberRef}
                label="Phone"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+880</InputAdornment>
                  ),
                }}
                inputProps={{ style: { color: "white" } }}
               
              />
              <br />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sm={6}
              className='b'
              sx={{ border: 1, p: 4, borderColor: "grey.500", borderRadius: 5 }}
            >
              <TextField
                sx={{ width: "50%", mb: 3 }}
                onChange={nameRef}
                id="standard-basic"
                label="Name"
                variant="standard"
              />
              <br></br>
              <TextField
                sx={{ width: "50%", mb: 3 }}
                id="standard"
                label="Photo url"
                variant="standard"
              />
              <br />
              <label htmlFor="icon-button-file">
                <Input
                  sx={{ width: "75%", mb: 3 }}
                  onChange={urlRef}
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
              <br></br>
              <TextField
                sx={{ width: "50%", mb: 3 }}
                onChange={priceRef}
                id="standar"
                label="Price"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Tk</InputAdornment>
                  ),
                }}
              />
              <br></br>
              <TextField
                id="standard-select-currency"
                sx={{ width: "50%", mb: 3 }}
                select
                label="Select"
                value={category}
                onChange={handleChange}
                helperText="Please select your category"
                variant="standard"
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <TextField
                sx={{ width: "50%", mb: 3 }}
                onChange={locationRef}
                id="standa"
                label="Location"
                variant="standard"
              />
              <br></br>
              <TextField
                sx={{ width: "50%", mb: 3 }}
                id="standard-multiline-static"
                label="Description"
                multiline
                rows={4}
                variant="standard"
                onClick={descriptionRef}
              />
              <br></br>
              <Button
                endIcon={<SendIcon />}
                onClick={handleSubmit}
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  marginTop: "25px",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default AddRent;
