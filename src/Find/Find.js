import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchList from "../Pages/SearchList/SearchList";
import { useLocation } from "react-router-dom";
const Find = () => {
  const { state } = useLocation();
  const { search, min, max, category, areas } = state;
  const [categories, setCategories] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch(
      `http://localhost:5000/find?search=${search}&&category=${category}&&areas=${areas}&&min=${min}&&max=${max}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoad(false);
      });
  }, []);
  console.log(categories);
  return (
    <div style={{ backgroundColor: "#DFF6FF", padding: "25px" }}>
      <Container sx={{ mt: 11 }}>
        <Typography
          variant="h4"
          className="shadow-lg bg-white py-2"
          sx={{ my: 10, color: "#2b7377", fontWeight: "bold" }}
        >
          Search Result:{categories.length}
        </Typography>
        <Grid container spacing={2}>
          {load ? (
            <CircularProgress className="mx-auto" />
          ) : categories[0] ? (
            categories.map((list) => (
              <SearchList key={list._id} list={list}></SearchList>
            ))
          ) : (
            <Typography
              variant="h1"
              sx={{ fontFamily: "initial", fontWeight: "bold", mb: 10 }}
            >
              No Result Found!!!
            </Typography>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Find;
