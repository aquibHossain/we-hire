import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation,useHistory } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import useAuth from '../../hook/useAuth';

const Login = () => {
  const {signInGoogle,signInUser,user,error}=useAuth()
    const [loginData,setLoginData]=useState({});
    const history=useHistory();
    const location=useLocation();
    const handleOnChange=e=>{
        const name=e.target.name;
        const val=e.target.value;
        const newLoginData={...loginData}
        newLoginData[name]=val
        setLoginData(newLoginData);
        
     }
    const handleSubmit=e=>{
      signInUser(loginData.email,loginData.password,location,history)
        e.preventDefault()
    }
    return (
      <div>
      <Container sx={{mt:11,mb:3}}>
            <Grid container spacing={2}>
        <Grid  item xs={12} sm={6} md={6} sx={{mt:6}}>
        <Typography style={{color:"#2b7377",fontWeight:'bolder'}} variant='h2' gutterBottom> Login</Typography>
        <form  onSubmit={handleSubmit}>
       
        <TextField sx={{width:'75%',m:1}}
         id="standard-basic"
          label="Email" 
          name='email'
          type='email'
          onBlur={handleOnChange}
          variant="standard" />
        <TextField sx={{width:'75%',m:1}} 
         id="standard-basic" 
         label="Password"
          type='password' 
          name='password'
          onBlur={handleOnChange}
          variant="standard" />
     {error && <Alert sx={{my:2,width:'75%',mx:'auto'}} severity="error">{error}</Alert>}
        <Button sx={{width:'50%',mt:4,mb:2,borderRadius:'20px',backgroundColor:'#2b7377'}}  type='submit' variant='contained'><img src="https://img.icons8.com/color/25/000000/login-rounded-right.png"/>Submit</Button>
        <br />
        {!user.email && <NavLink to='/register'
          style={{textDecoration:"none"}}>
          <Button sx={{width:'50%',mb:2}}  variant="text">New User ? Please Register</Button>
          </NavLink>}
          <div>
          <Button onClick={()=>signInGoogle(location,history)} variant='text'><img  src="https://img.icons8.com/color/40/000000/google-logo.png"/></Button>
         <Button> <img  src="https://img.icons8.com/color/40/000000/facebook-new.png"/></Button>
</div>

        </form>
        </Grid>
        <Grid  item xs={12} sm={6} md={6} >
        <img className='img-fluid' src='https://i.ibb.co/Jtqmp8d/Multicolored-Buildings-Decor-PNG-Clip-Art-Image.png'  style={{width:"100%",height:"100%"}} alt="" />
        </Grid>
      </Grid>
      </Container>
       <Footer></Footer>
       </div>
    );
};

export default Login;