import { Avatar, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './SearchList.css'

const SearchList = ({list}) => {
  const history=useHistory()
    const {name,url,price,location,_id,areas,displayName,pubPic}=list
    const handleClick=(id)=>{
     history.push(`/details/${id}`)
    }
    const reserve="https://i.ibb.co/1zbBh1f/pngwing-com-1.png";
    return (
       
            <Grid  item xs={12} md={3} sm={6}>
             <Card className='searchlist' onClick={()=>handleClick(_id)}  sx={{borderRadius:3, maxWidth:321,boxShadow:'8px 15px 10px gray',mb:3,height:337}}>
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
        <Grid sx={{backgroundColor:'#dce9f4',px:2,py:1,margin:0}} container>
          <Grid item xs={6} md={6} sm={6}>
          <Typography sx={{textAlign:'left'}}  variant='body1' color="text.secondary"><img className='me-1' src="https://img.icons8.com/color/20/000000/marker--v1.png"/>{areas}</Typography>
          </Grid>
          <Grid item xs={6} md={6} sm={6}>
          <Typography sx={{textAlign:'right'}} variant='body1'><img className='me-1' src="https://img.icons8.com/color/20/000000/price-tag-usd--v1.png"/>{price}/-</Typography>
       </Grid>
        </Grid>
      </CardActionArea>
    </Card>
    </Grid>
    );
};

export default SearchList;