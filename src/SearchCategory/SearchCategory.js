import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import SearchList from '../Pages/SearchList/SearchList';
import Footer from '../Footer/Footer';


const SearchCategory = () => {
    const category = useParams();
    console.log(category);
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(`https://we-hire-database.onrender.com/search/${category.category}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <>
            <div style={{ backgroundColor: '#DFF6FF', padding: '25px' }}>
                <Container sx={{ mt: 11 }}>
                    <Typography variant='h4' className='shadow-lg bg-white py-2' sx={{ my: 10, color: "#2b7377", fontWeight: 'bold' }}>Search Result:{categories.length}</Typography>
                    <Grid container spacing={2} >
                        {categories[0] ?
                            categories.map(list => <SearchList key={list._id} list={list}></SearchList>) :
                            <CircularProgress className='mx-auto' />
                        }
                    </Grid>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default SearchCategory;