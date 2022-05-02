import { Box } from '@mui/material';
import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <Box className='py-5' id="not-found">
        <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
        <div className="circles">
          <p>404<br/>
           <small>PAGE NOT FOUND</small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </Box>
    );
};

export default NotFound;