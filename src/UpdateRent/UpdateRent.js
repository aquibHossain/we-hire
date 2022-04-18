import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import useAuth from "../hook/useAuth";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:'center'
};
const UpdateRent = ({id,handleClose,open,setUpdated}) => {
    const [result,SetResult]=useState({})
    useEffect(()=>{
       fetch(`https://mysterious-chamber-53519.herokuapp.com/details/${id}`)
       .then(res=>res.json())
       .then(data=>SetResult(data))
    },[])
      const { user } = useAuth();
      const [name, setName] = useState("");
      const [location, setlocation] = useState("");
      const [description, setdescription] = useState("");
      const [pubName, setpubName] = useState('');
      const [number, setnumber] = useState('');
      const [price, setprice] = useState(0);
    
      const handleSubmit = (e) => {
        const newCategory = {
          name:name||result[0].name,
          url:result[0].url,
          price:price||result[0].price,
          location:location||result[0].location,
          description:description||result[0].description,
          pubName:pubName||result[0].pubName,
          number:number||result[0].number,
          category:result[0].category,
          areas:result[0].areas,
          pubPic:user.photoURL,
          email:user.email
        };
        console.log(newCategory);
        fetch(`https://mysterious-chamber-53519.herokuapp.com/details/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((data) => {alert("updated")
      setUpdated(false)
      handleClose()
        console.log(data);
      });
          e.preventDefault()
      };
      const appointmentBg={
        background:`url("https://i.ibb.co/njv6CD6/wallpaperflare-com-wallpaper-1.jpg")`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }
    return (
        <div >
           <Modal
           
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
         <Fade in={open}>
          <Box style={appointmentBg} sx={style}>
          {
         result[0]? <Container >
         <Typography
           variant="h5"
           className='div mx-auto'
           sx={{fontFamily:'initial', fontWeight: "bold", mb:2,color:"#2b7377" }}
         >
           Update Rent
         </Typography>
 
         <form action="" onSubmit={handleSubmit}>
           <Grid container >
             <Grid sx={{mb:2}} item xs={12} md={12} sm={12}>
               <TextField
                 sx={{mb:2}}
                 onChange={(e)=>{setpubName(e.target.value)}}
                 id="st"
                 className="b"
                 label="Publisher Name"
                 defaultValue={result[0]?.pubName}
                 variant="filled"
               />
               <br></br>
               <TextField
                 id="stan"
                 onChange={(e)=>{setnumber(e.target.value)}}
                 variant="filled"
                 className="b"
                 type='number'
                 defaultValue={result[0]?.number}
                 label="Phone"
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">+880</InputAdornment>
                   ),
                 }}
               />
               <br />
             </Grid>
             <Grid
               item
               xs={12}
               md={12}
               sm={12}
               className='back shadow-lg'
               sx={{ borderRadius: 5,py:2 }}
             >
               <TextField
               required
                 sx={{ width: "75%", mb: 2}}
                 onChange={(e)=>{setName(e.target.value)}}
                 id="standard-basic"
                 label="Name"
                 defaultValue={result[0]?.name}
                 variant="standard"
               />
               <br />
               <TextField
                 sx={{ width: "75%", mb: 2}}
                 onChange={(e)=>{setprice(e.target.value)}}
                 id="standar"
                 label="Price"
                 type='number'
                 defaultValue={result[0]?.price}
                 variant="standard"
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">Tk</InputAdornment>
                   ),
                 }}
               />
               <br />
               <TextField
                 sx={{ width: "75%", mb: 2 }}
                 onChange={(e)=>{setlocation(e.target.value)}}
                 id="standa"
                 label="Location"
                 defaultValue={result[0]?.location}
                 variant="standard"
               />
               <br></br>
               <TextField
                 sx={{ width: "75%", mb: 2}}
                 id="standard-multiline-static"
                 label="Description"
                 defaultValue={result[0]?.description}
                 multiline
                 rows={4}
                 variant="standard"
                 onChange={(e)=>{setdescription(e.target.value)}}
               />
               <br></br>
               <Button
                 endIcon={<SendIcon />}
                 variant="contained"
                 sx={{my:1,backgroundColor:'#2b7377'}}
                 type="submit"
               >
                Update
               </Button>
             </Grid>
           </Grid>
         </form>
       </Container>:<CircularProgress className="mx-auto"></CircularProgress>
     }
          </Box>
        </Fade>
      </Modal>
     
    </div>
    );
};

export default UpdateRent;