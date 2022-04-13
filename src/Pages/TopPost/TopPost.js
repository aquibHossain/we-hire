import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchList from '../SearchList/SearchList';

const TopPost = () => {
    const [search,setSearch]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addrent')
        .then(res=>res.json())
       .then(data=>setSearch(data))
       
      },[])

    return (
        <div>
             <Typography variant='h3' className='div' sx={{mt:15,mb:5,mx:'auto'}} style={{color:"#2b7377",fontWeight:'bold'}}>Top Post</Typography>
             <Container >
          
      <Grid container spacing={4}  >
 {
  search.slice(0,4).map(list=><SearchList key={list._id} list={list}></SearchList>)
}
</Grid>
</Container>  
        </div>
    );
};

export default TopPost;