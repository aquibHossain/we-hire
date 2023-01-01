import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchList from '../SearchList/SearchList';
import Slider from "react-slick";
import TopPostItem from './TopPostItem';

const TopPost = ({ children }) => {
  const [search, setSearch] = useState([])

  useEffect(() => {
    fetch('https://we-hire-database.vercel.app/addrent')
      .then(res => res.json())
      .then(data => { setSearch(data) })
  }, [])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  const paidPost = search.filter(item => item.payment?.amount)
  return (
    <div>
      {children}
      <Container >
        {paidPost[0] ? <Slider {...settings}>

          {

            paidPost.map(list => <TopPostItem key={list._id} list={list}></TopPostItem>)
          }

        </Slider>
          :
          <CircularProgress className='mx-auto text-danger' />}
      </Container>
    </div>
  );
};

export default TopPost;