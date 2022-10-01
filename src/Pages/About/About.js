import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography,Container} from '@mui/material';
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
        marginTop:110
    }
    return (
        <div>
        <Box style={appointmentBg} sx={{ flexGrow: 1,mb:9 }}>
<Container>
<Grid container spacing={2} sx={{p:2}}>
   <Grid item xs={12} md={6}>
     <img
     className='img-fluid w-75'
     style={{marginTop:"-125px"}}
     src="https://i.ibb.co/f0mS9yv/men.png"/>
   </Grid>
   <Grid item xs={12} md={6}
   sx={{ display: 'flex',
   justifyContent: 'flex-start',
   alignItems:"center",
   textAlign:"left" }}>
 <Box>
 <Typography variant="h5" sx={{mb:1}} style={{color:'#5CE7ED'}} component="div">
 আপনার বাসা ভাড়া দিতে চান?
   </Typography>
   <Typography variant="h3" style={{color:'white',lineHeight:"1.5"}} component="div">
   
খুব সহজেই আপনার বিজ্ঞাপনটি ফ্রি পোস্ট করুন
   </Typography>
   <Button onClick={handleClick} className="py-2 px-4 mt-5" variant='contained' style={{backgroundColor:'#5CE7ED'}}>বিজ্ঞাপন দিন</Button>
 </Box>
   </Grid>
   </Grid>
</Container>
</Box>
   </div>
    );
};

export default About;