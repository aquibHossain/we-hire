import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import useAuth from "../../hook/useAuth";
import './AddREnt.css'
import FileBase64 from 'react-file-base64';
import Footer from "../../Footer/Footer";

const AddRent = () => {
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
  
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [url, seturl] = useState("");
  const [location, setlocation] = useState("");
  const [description, setdescription] = useState("");
  const [pubName, setpubName] = useState(user.displayName);
  const [number, setnumber] = useState("");
  const [price, setprice] = useState(0);
  const [category, setCategory] = React.useState(options[0]);
  const [areas, setAreas] = React.useState(area[0]);

  const nameRef = (e) => {
    setName(e.target.value);
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
  const handleChangeD = (event) => {
    setAreas(event.target.value);
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
      areas,
      pubPic:user.photoURL,
      email:user.email
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
      e.preventDefault()
  };
  const appointmentBg={
    background:`url("https://i.ibb.co/njv6CD6/wallpaperflare-com-wallpaper-1.jpg")`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",   
}
  return (
    <>
    <div style={appointmentBg}>
      <Container sx={{p:9}}>
        <Typography
          variant="h1"
          className='div mx-auto'
          sx={{fontFamily:'initial', fontWeight: "bold", mb:10,color:"#2b7377" }}
        >
          Post Ad
        </Typography>

        <form action="" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid sx={{mb:3}} item xs={12} md={6} sm={6}>
            <Typography
          variant='h5'
          sx={{mb:2,fontWeight:'bold'}}
        >
          Personal information
        </Typography>
        <br />
              <TextField
                sx={{ width: "50%", mb: 3 }}
                onChange={pubNameRef}
                id="st"
                className="b"
                label="Publisher Name"
                value={pubName}
                variant="filled"
                
              />
              <br></br>
              <TextField
                sx={{ width: "50%" }}
                id="stan"
                onChange={numberRef}
                variant="filled"
                className="b"
                type='number'
                label="Phone"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+880</InputAdornment>
                  ),
                }}
              />
              <br />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sm={6}
              className='back shadow-lg'
              sx={{ p: 4,  borderRadius: 5 }}
            >
              <TextField
              required
                sx={{ width: "50%", mb: 3 }}
                onChange={nameRef}
                id="standard-basic"
                label="Name"
                variant="standard"
              />
              
           
              <br />
              <TextField
                sx={{ width: "50%", mb: 3 }}
                onChange={priceRef}
                id="standar"
                label="Price"
                type='number'
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Tk</InputAdornment>
                  ),
                }}
              />
              <br></br>
              <TextField
              required
                id="standard-select-currency"
                sx={{ width: "50%", mb: 3 }}
                select
                label="Category"
                value={category}
                onChange={handleChange}
               
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
              required
                id="standard-select-district"
                sx={{ width: "50%", mb: 3 }}
                select
                label="District"
                value={areas}
                onChange={handleChangeD}
                variant="standard"
              >
                {area.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <TextField
                sx={{ width: "50%",me:3, mb: 3 }}
                onChange={locationRef}
                id="standa"
                required
                label="Location"
                variant="standard"
              />
              <br></br>
              <TextField
                sx={{ width: "50%", mb: 4 }}
                id="standard-multiline-static"
                label="Description"
                multiline
                rows={4}
                variant="standard"
                onChange={descriptionRef}
              />
              <br></br>
             
              <label  htmlFor="icon-button-file">
              <FileBase64
        multiple={ false }
        onDone={ ({base64})=>seturl(base64) }/>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
              <br></br>
              <Button
                endIcon={<SendIcon />}
                variant="contained"
                sx={{mt:3,backgroundColor:'#2b7377'}}
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  <Footer></Footer>
    </>
  );
};

export default AddRent;
