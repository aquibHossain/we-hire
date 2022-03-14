import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Catergory from '../Category/Catergory';
import { Container } from '@mui/material';

const Categories = () => {
  const [categories,setCategories]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/categories')
    .then(res=>res.json())
   .then(data=>setCategories(data))
  },[])
  
    return (
   <div >
        <Container>
      <Grid container spacing={2} >
  {
  categories.map(category=><Catergory key={category._id} category={category}></Catergory>)
  }
</Grid>
</Container>
   </div>
       
    );
};

export default Categories;