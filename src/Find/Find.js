import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchList from "../Pages/SearchList/SearchList";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Box } from "@mui/system";
const Find = () => {
  const { state } = useLocation();
  const { search, min, max, category, areas } = state;
  const [categories, setCategories] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch(
      `https://mysterious-chamber-53519.herokuapp.com/find?search=${search}&&category=${category}&&areas=${areas}&&min=${min}&&max=${max}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoad(false);
      });
  }, []);
  console.log(categories);
  return (
    <>
    <Box sx={{ backgroundColor: "#DFF6FF",py:4,px:2 }}>
      <Container sx={{ mt: 11 }}>
        <Typography
          variant="h4"
          className="shadow-lg bg-white py-2"
          sx={{ my: 10, color: "#2b7377", fontWeight: "bold" }}
        >
          Search Result:{categories.length}
        </Typography>
        
        <Grid container spacing={3}>
          {load ? (
            <CircularProgress className="mx-auto" />
          ) : categories[0] ? (
            categories.map((list) => (
              <SearchList key={list._id} list={list}></SearchList>
            ))
          ) : (

            <img className="img-fluid mx-auto ps-4" width='100%' height='500px' src='https://cdn.dribbble.com/users/2382015/screenshots/6065978/media/8b4662f8023e4e2295f865106b5d3aa7.gif'></img>

           
          )}
        </Grid>
      </Container>
     
    </Box>
     <Footer></Footer>
     </>  );
};

export default Find;
