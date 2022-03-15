import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import SearchList from '../Pages/SearchList/SearchList';

const SearchCategory = () => {
    const category=useParams();
    console.log(category);
    const [categories,setCategories]=useState([])
    useEffect(()=>{
      fetch(`http://localhost:5000/search/${category.category}`)
      .then(res=>res.json())
     .then(data=>setCategories(data))
    },[])
    
    return (
        <div>
             <Container sx={{mt:11}}>
      <Grid container spacing={2} >
  {
  categories.map(list=><SearchList key={list._id} list={list}></SearchList>)
  }
</Grid>
</Container>
        </div>
    );
};

export default SearchCategory;