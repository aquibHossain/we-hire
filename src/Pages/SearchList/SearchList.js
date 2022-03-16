import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchList = ({list}) => {
  const history=useHistory()
    const {name,url,price,location,_id,areas}=list
    const handleClick=(id)=>{
     history.push(`/details/${id}`)
    }
    const reserve="https://i.ibb.co/1zbBh1f/pngwing-com-1.png";
    return (
        <div>
            <Grid  item xs={12} md={4} sm={6}>
               <Container>
             <Card onClick={()=>handleClick(_id)}  sx={{borderRadius:3, width:321,boxShadow:'8px 15px 10px gray',mb:5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={url||reserve}
          alt={name}
          title={name}
        />
        <CardContent>
        <Typography  gutterBottom variant="h5"  sx={{fontWeight:'bold',}}>{name}</Typography>
        <Typography  gutterBottom>{location}</Typography>
        </CardContent>
        <Grid sx={{backgroundColor:'#dce9f4',px:2,py:1}} container>
          <Grid item xs={12} md={6} sm={6}>
          <Typography sx={{textAlign:'left'}}  variant='body1' color="text.secondary"><img className='me-1' src="https://img.icons8.com/color/20/000000/marker--v1.png"/>{areas}</Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
          <Typography sx={{textAlign:'right'}} variant='body1'><img className='me-1' src="https://img.icons8.com/color/20/000000/price-tag-usd--v1.png"/>{price}/-</Typography>
       </Grid>
        </Grid>
      </CardActionArea>
    </Card>
    </Container>
    </Grid>
        </div>
    );
};

export default SearchList;