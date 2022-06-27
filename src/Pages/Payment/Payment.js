import React,{useState,useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from '../CheckOutForm/CheckOutForm';
const stripePromise = loadStripe("pk_test_51KiCK6HlIpHzNhGaKYyj2yJBNJNjExR3j2EbDXMAnK2UZjz1e5gJJUO7O8YaykOr1RcTANLewCYHeQqFeDcNanlD00UmPGPKeb");

const Payment = () => {
    const {id}=useParams()
    const price=100/90;
    const [post,setPost]=useState({})
    useEffect(()=>{
      fetch(`https://mysterious-chamber-53519.herokuapp.com/details/${id}`)
      .then(res=>res.json())
      .then(data=>{setPost(data[0])
         console.log(data)})
    },[])
    return (
        <div >
             <Typography variant="h2" className='div' sx={{ fontWeight: "bold",mx:'auto', my: 5,color:"#2b7377" }}>
        Payment 
      </Typography>
      <Typography variant='h6' className='my-3'><span className='fw-bold'>Post Name:</span> {post.name}</Typography>
      <Typography variant='p' ><span className='fw-bold'>Pay: </span> Tk 100</Typography>
      <Elements  stripe={stripePromise}>
          <CheckOutForm price={price} post={post}></CheckOutForm>
        </Elements>
        </div>
    );
};

export default Payment;