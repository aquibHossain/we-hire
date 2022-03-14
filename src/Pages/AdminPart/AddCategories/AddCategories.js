import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddCategories = () => {
  const [name,setName]=useState('')
  const [url,seturl]=useState('')
    const nameRef=e=>{
       setName(e.target.value)
    }
    const urlRef=e=>{
      seturl(e.target.value)
    }
    
     const handleSubmit=e=>{
      const newCategory={name,url}
      console.log(newCategory);
      fetch('http://localhost:5000/categories',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(newCategory)
       }).then(res=>res.json())
       .then(data=>{
        if(data.insertedId){
          alert('Category Added'); 
          e.target.reset();
       }
         console.log(data);
       })
      
     }
    return (
        <div>
          <Typography>Add Categories</Typography>
            <TextField onChange={nameRef} id="standard-basic" label="Name" variant="standard" />
            <br></br>
            <TextField onChange={urlRef} id="standard" label="Photo url" variant="standard" />
            <br></br>
            <Button onClick={handleSubmit} variant='contained' style={{backgroundColor:'#5CE7ED'}}>Submit</Button>
        </div>
    );
};

export default AddCategories;