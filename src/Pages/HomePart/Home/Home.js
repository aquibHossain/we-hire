import {Typography } from '@mui/material';
import React from 'react';
import Footer from '../../../Footer/Footer';
import About from '../../About/About';
import HeaderPart from '../../Header/HeaderPart/HeaderPart';
import TopPost from '../../TopPost/TopPost';
import Categories from '../Categories/Categories';
import CustomerDetails from '../CustomerDetails/CustomerDetails';
import Description from '../Description/Description';


const Home = () => {
    return (
        <div>
            <HeaderPart></HeaderPart>
           <Categories></Categories>
           <Description></Description>
           <TopPost>
           <Typography variant='h3' className='div' sx={{mt:9,mb:5,mx:'auto'}} style={{color:"#2b7377",fontWeight:'bold'}}>Top Post</Typography>
           </TopPost>
           <About></About>
           <CustomerDetails></CustomerDetails>
           <Footer></Footer>
        </div>
    );
};

export default Home;