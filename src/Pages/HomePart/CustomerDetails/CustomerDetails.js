import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CountUp from 'react-countup';

const CustomerDetails = () => {
    return (
        <div>
             <Container>
            <Grid container spacing={4} sx={{my:9}}>
               <Grid item xs={12} md={3} sm={6} >
               <Box sx={{backgroundColor:"#DFF6FF",p:4,height:220,boxShadow:"-4px -5px 14px rgb(0 0 0 / 8%), 5px 8px 16px rgb(0 0 0 / 8%)"}}>
               <i style={{fontSize:'3em',color:"#2b7377"}} className="fas fa-eye"></i>
               <br />
               <CountUp  
               style={{fontWeight:'bold',color:'white',fontSize:'3em'}}      
  start={0}
  end={15}
  duration={3}
  suffix="M"
></CountUp>
<Typography variant='h6' style={{color:"#2b7377",fontWeight:'bold'}}>Total View</Typography>
               </Box>
               </Grid>
               <Grid 
               item xs={12} md={3} sm={6} >
                    <Box sx={{backgroundColor:"#c2ebfb",p:4,height:220,boxShadow:"-4px -5px 14px rgb(0 0 0 / 8%), 5px 8px 16px rgb(0 0 0 / 8%)"}}>
                  <i style={{fontSize:'3em',color:"#2b7377"}} className="fas fa-users"></i>
                   <br />
               <CountUp
                style={{fontWeight:'bold',color:'white',fontSize:'3em'}} 
  start={0}
  end={160}
  duration={3}
  suffix="K"
></CountUp>
<Typography variant='h6' style={{color:"#2b7377",fontWeight:'bold'}}>Total User</Typography></Box>
               </Grid>
               <Grid item xs={12} md={3} sm={6} >
               <Box  sx={{backgroundColor:"#DFF6FF",p:4,height:220,boxShadow:"-4px -5px 14px rgb(0 0 0 / 8%), 5px 8px 16px rgb(0 0 0 / 8%)"}}>
               <i style={{fontSize:'3em',color:"#2b7377"}} className="fa-solid fa-house"></i>
               <br />
               <CountUp   
               style={{fontWeight:'bold',color:'white',fontSize:'3em'}}  
  start={0}
  end={12}
  duration={3}
  suffix="K"
></CountUp>
<Typography variant='h6' style={{color:"#2b7377",fontWeight:'bold'}}>Total House Listed</Typography></Box>
               </Grid>
               <Grid item xs={12} md={3} sm={6}>
               <Box sx={{backgroundColor:"#c2ebfb",p:4,height:220,boxShadow:"-4px -5px 14px rgb(0 0 0 / 8%), 5px 8px 16px rgb(0 0 0 / 8%)"}}>
               <i style={{fontSize:'3em',color:"#2b7377"}} className="fa-solid fa-comment-dots"></i>
               <br />
               <CountUp
                style={{fontWeight:'bold',color:'white',fontSize:'3em'}} 
  start={0}
  end={18}
  duration={3}
  suffix="K"
></CountUp>
<Typography variant='h6' style={{color:"#2b7377",fontWeight:'bold'}}>Total Rent Request</Typography></Box>
               </Grid>
           </Grid>
           </Container>
        </div>
    );
};

export default CustomerDetails;