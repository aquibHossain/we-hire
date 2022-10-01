import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import SearchList from '../SearchList/SearchList';
import TopPost from '../TopPost/TopPost';

const Search = () => {
    const [search,setSearch]=useState([])
    useEffect(()=>{
        fetch('https://mysterious-chamber-53519.herokuapp.com/addrent')
        .then(res=>res.json())
       .then(data=>{setSearch(data)})
      },[])
    return (
        <>
        <Box sx={{backgroundColor:'#DFF6FF',pb:5}}>
        <Typography variant='h3' className='shadow-lg bg-white py-4' sx={{my:8,color:"#2b7377",fontWeight:'bold'}}>Rents</Typography>
          <Container sx={{mt:3}}>
         
      <Grid container spacing={3}>
         
  {
  (search.reverse()[0])?
  search.map(list=><SearchList key={list._id} list={list}></SearchList>):
  <CircularProgress className='mx-auto' />
  }
</Grid>
</Container>  
        </Box>
        <Footer></Footer>
        </>
    );
};

export default Search;