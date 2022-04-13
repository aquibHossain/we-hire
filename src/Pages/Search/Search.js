import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import SearchList from '../SearchList/SearchList';

const Search = () => {
    const [search,setSearch]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addrent')
        .then(res=>res.json())
       .then(data=>setSearch(data))
      
       console.log('reverse',search);
      },[])

      
    return (
        <>
        <div style={{backgroundColor:'#DFF6FF',padding:'25px'}}>
          <Container sx={{mt:11}}>
          <Typography variant='h4' className='shadow-lg bg-white py-2' sx={{my:10,color:"#2b7377",fontWeight:'bold'}}>Rents</Typography>
      <Grid container spacing={4}  >
  {search[0]?
  search.map(list=><SearchList key={list._id} list={list}></SearchList>):
  <CircularProgress className='mx-auto' />
  }
</Grid>
</Container>  
        </div>
        <Footer></Footer>
        </>
    );
};

export default Search;