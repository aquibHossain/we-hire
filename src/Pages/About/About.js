import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

const About = () => {
  const history =useHistory()
  const handleClick=()=>{
   history.push('/addrent')
  }
    const appointmentBg={
        background:`url("https://i.ibb.co/tHWgR5B/shutterstock-262923179-e1500871070126.jpg")`,
        backgroundColor:"rgba(45,58,74,.8)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundBlendMode:'darken,luminosity',
        marginTop:175
    }
    return (
        <div>
        <Box style={appointmentBg} sx={{ flexGrow: 1,my:10 }}>
 <Grid container spacing={2} sx={{p:2}}>
   <Grid item xs={12} md={6}>
     <img
     style={{width:'25em',marginTop:"-125px"}}
     src="https://i.ibb.co/f0mS9yv/men.png"/>
   </Grid>
   <Grid item xs={12} md={6}
   sx={{ display: 'flex',
   justifyContent: 'flex-start',
   alignItems:"center",
   textAlign:"left" }}>
 <Box>
 <Typography variant="h6" sx={{mb:5}} style={{color:'#5CE7ED'}} component="div">
 আপনার বাসা ভাড়া দিতে চান?
   </Typography>
   <Typography variant="h4" style={{color:'white'}} component="div">
   
খুব সহজেই আপনার বিজ্ঞাপনটি ফ্রি পোস্ট করুন
   </Typography>
   <Typography variant="h6" sx={{my:5}}  style={{color:'white',fontSize:14,fontWeight:300}} component="div">
   </Typography>
   <Button onClick={handleClick} variant='contained' style={{backgroundColor:'#5CE7ED'}}>বিজ্ঞাপন দিন</Button>
 </Box>
   </Grid>
   </Grid>
</Box>
   </div>
    );
};

export default About;