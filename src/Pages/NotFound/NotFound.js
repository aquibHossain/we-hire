import { Box } from '@mui/material';
import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <Box className='py-5' id="not-found">
        <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
        <div class="circles">
          <p>404<br/>
           <small>PAGE NOT FOUND</small>
          </p>
          <span class="circle big"></span>
          <span class="circle med"></span>
          <span class="circle small"></span>
        </div>
      </Box>
    );
};

export default NotFound;