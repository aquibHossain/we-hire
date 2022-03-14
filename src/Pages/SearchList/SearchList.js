import { Card, CardActionArea, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchList = ({list}) => {
  const history=useHistory()
    const {name,url,price,description,location,_id}=list
    const handleClick=(id)=>{
     history.push(`/details/${id}`)
    }
    return (
        <div>
            <Grid  item xs={12} md={4} sm={6}>
               <Container>
             <Card onClick={()=>handleClick(_id)}  sx={{ width: 340,boxShadow:'8px 15px 10px gray',mb:3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={url}
          alt="green iguana"
          title={name}
        />
        <Typography sx={{backgroundColor:'#DFF6FF',fontWeight:'bold'}}>{name}</Typography>
        <Typography sx={{backgroundColor:'#DFF6FF',fontWeight:'bold'}}>Price:{price}</Typography>
        <Typography sx={{backgroundColor:'#DFF6FF',fontWeight:'bold'}}>Location:{location}</Typography>
      </CardActionArea>
    </Card>
    </Container>
    </Grid>
        </div>
    );
};

export default SearchList;