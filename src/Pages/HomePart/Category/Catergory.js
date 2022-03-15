import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Container, Grid, IconButton, ImageListItemBar, TextField, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Catergory = ({category}) => {
  const {name,url}=category
  console.log(name,url);
  const history=useHistory()
  const handleClick=(name)=>{
   history.push(`/search/${name}`)
  }
    return (
        <div>
             <Grid item xs={12} md={4} sm={6}  >
               <Container>
             <Card  onClick={()=>handleClick(name)} sx={{ width: 340,boxShadow:'6px 7px 10px gray',mb:2,mt:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={url}
          alt={name}
          title={name}
        />
        <ImageListItemBar
            title={name}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${name}`}
              >
              </IconButton>
            }
          />
      </CardActionArea>
    </Card>
    </Container>
    </Grid>
    
        </div>
    );
};

export default Catergory;