import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink ,useHistory} from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Register = () => {
    const [loginData,setLoginData]=useState({})
    const{ signUpUser,user,isLoading,error}=useAuth()
    const history=useHistory();
    const handleOnChange=e=>{
       const name=e.target.name;
       const val=e.target.value
       console.log(name, val);
       const newLoginData={...loginData}
       newLoginData[name]=val
       setLoginData(newLoginData);
       
    }
    const handleSubmit=e=>{ 
      if(loginData.password!=loginData.password2){
        alert("Password didn't match")
        return
    }
    signUpUser(loginData.email,loginData.password,loginData.name,history)
        e.preventDefault()
    }
    return (
        <Container sx={{mt:11}}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} >
    <img src='https://i.ibb.co/0FGg3v8/kindpng-390853.png' style={{width:"100%",height:"100%"}} alt="" />
    </Grid>
    <Grid item xs={12} sm={6} md={6} sx={{mt:3}}>
    <Typography style={{color:"skyblue",fontWeight:'bolder',fontSize:'40px'}}  variant='body1' gutterBottom> Register</Typography>
    {!isLoading && <form onSubmit={handleSubmit}>
    <TextField sx={{width:'75%',m:1}}
         id="standard-basic"
          label="Name" 
          name='name'
          onBlur={handleOnChange}
          variant="standard" />
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
    <TextField sx={{width:'75%',m:1}} 
     id="standard-basic" 
     label="Re-Type Password"
      type='password' 
      name='password2'
      onBlur={handleOnChange}
      variant="standard" />
      
    <Button  sx={{width:'75%',m:2,borderRadius:'20px'}}  type='submit' variant='contained'>Register</Button>
    <NavLink to='/login'
      style={{textDecoration:"none"}}>
      <Button  variant="text">Already Registered? Please Login</Button>
      </NavLink>
    </form>}
   
    {
      isLoading && <CircularProgress></CircularProgress>
    }
    {
      user.email && <Alert severity="success">User Created Successfully</Alert>
    }
    {
       error && <Alert severity="error">{error}</Alert>
    }
    
    </Grid>
  </Grid>
    </Container>
    );
};

export default Register;