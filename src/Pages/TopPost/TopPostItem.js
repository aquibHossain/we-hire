import { Avatar,Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';


const TopPostItem = ({list}) => {
  const history=useHistory()
    const {name,url,price,location,_id,areas,displayName,pubPic}=list
    const handleClick=(id)=>{
     history.push(`/details/${id}`)
    }
    const reserve="https://i.ibb.co/1zbBh1f/pngwing-com-1.png";
    return (
       
             <Card className='searchlist' onClick={()=>handleClick(_id)}   sx={{borderRadius:3,margin:"10px 12px 15px",height:337,boxShadow:'4px 8px 18px rgb(0 0 0 / 10%)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={url||reserve}
          alt={name}
          title={name}
        />  
           <Avatar className='avator' src={pubPic ||displayName} sx={{ backgroundColor:'#dce9f4'}} aria-label="recipe">
        </Avatar> 
        <CardContent>
       
        <Typography  gutterBottom variant="h5"  sx={{fontWeight:'bold',mt:2}}>{name.slice(0,15)}</Typography>
        <Typography  gutterBottom>{location.slice(0,15)}</Typography>
        </CardContent>

   
          <Box className="d-flex justify-content-between" sx={{backgroundColor:'#dce9f4',px:2,py:1,margin:0}}>
          <Typography sx={{textAlign:'left'}} className="d-flex"  variant='body1' color="text.secondary"><img className='me-1' src="https://img.icons8.com/color/20/000000/marker--v1.png"/>{areas}</Typography>
          
   
          <Typography sx={{textAlign:'right'}} className="d-flex" variant='body1'><img className='me-1' src="https://img.icons8.com/color/20/000000/price-tag-usd--v1.png"/>{price}/-</Typography>
          </Box>
     
     
      </CardActionArea>
    </Card>
    );
};

export default TopPostItem;