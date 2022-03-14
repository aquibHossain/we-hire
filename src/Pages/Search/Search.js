import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchList from '../SearchList/SearchList';

const Search = () => {
    const [search,setSearch]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addrent')
        .then(res=>res.json())
       .then(data=>setSearch(data))
      },[])
    return (
        <div>
          <Container sx={{mt:11}}>
      <Grid container spacing={2} >
  {
  search.map(list=><SearchList key={list._id} list={list}></SearchList>)
  }
</Grid>
</Container>  
        </div>
    );
};

export default Search;