import { Alert, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hook/useAuth';

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
    const [success,setSuccess]=useState(false)
    const {token}=useAuth()
    const handleSubmit=()=>{
        const user={email}
         fetch('http://localhost:5000/users/admin',{
             method:'PUT',
             headers:{
                 'authorization':`Bearer ${token}`,
                 'content-type':'application/json'
             },
             body:JSON.stringify(user)  
         }).then(res=>res.json())
         .then(data=>{
             if(data.modifiedCount){
                 setSuccess(true)
             }
         })
    }
    const emailRef=(e)=>{
        setEmail(e.target.value)
    }
    return (
        <div>
            <Typography variant='h2' sx={{fontWeight:'bold',my:10}}>Make Admin</Typography>
            <form action="">
            <Input sx={{mr:3}} onChange={emailRef} id="standard-basic" label="Email" variant="standard" />
            <Button onClick={handleSubmit} variant='contained'>Submit</Button>
            </form>
            {
     success && <Alert className='w-50 mx-auto mt-5' severity="success">Admin Added Successfully</Alert>
    }
        </div>
    );
};

export default MakeAdmin;