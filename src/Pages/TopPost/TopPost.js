import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchList from '../SearchList/SearchList';

const TopPost = ({children}) => {
    const [search,setSearch]=useState([])
    
    useEffect(()=>{
        fetch('https://mysterious-chamber-53519.herokuapp.com/addrent')
        .then(res=>res.json())
       .then(data=>{setSearch(data)})
      },[])
 const paidPost=search.filter(item=>item.payment?.amount)
    return (
        <div>
             {children}
             <Container >
          
      <Grid container spacing={3}  >
      {
  (paidPost[0])?
  
   paidPost.slice(0,4).map(list=><SearchList key={list._id} list={list}></SearchList>):
  <CircularProgress className='mx-auto' />
  }
</Grid>
</Container>  
        </div>
    );
};

export default TopPost;