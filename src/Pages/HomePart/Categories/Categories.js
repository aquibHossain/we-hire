import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Catergory from '../Category/Catergory';
import { Container, Typography } from '@mui/material';

const Categories = () => {
  const [categories,setCategories]=useState([])
  useEffect(()=>{
    fetch('https://mysterious-chamber-53519.herokuapp.com/categories')
    .then(res=>res.json())
   .then(data=>setCategories(data))
  },[])

    return (
   <div >
     <Typography variant='h3' className='div' sx={{mt:9,mb:5,mx:'auto'}} style={{color:"#2b7377",fontWeight:'bold'}}>Catergories</Typography>
        <Container>
      <Grid container spacing={6} >
  {
  categories.map(category=><Catergory key={category._id} category={category}></Catergory>)
  }
</Grid>
</Container>
   </div>
       
    );
};

export default Categories;