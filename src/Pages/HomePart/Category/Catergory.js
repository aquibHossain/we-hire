import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea,Grid, IconButton, ImageListItemBar } from '@mui/material';
import { useHistory } from 'react-router-dom';
import './Category.css'

const Catergory = ({category}) => {
  const {name,url}=category
  const history=useHistory()
  const handleClick=(name)=>{
   history.push(`/search/${name}`)
  }
    return (
             <Grid item xs={12} md={4} sm={6}  >
             <Card  onClick={()=>handleClick(name)} sx={{ boxShadow:'6px 7px 10px gray'}}>
      <CardActionArea>
        <CardMedia
        className='card'
          component="img"
          height="180"
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
    </Grid>

    );
};

export default Catergory;