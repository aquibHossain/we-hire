import React, { useEffect, useState } from 'react';
import {CardElement,useElements, useStripe} from '@stripe/react-stripe-js';
import './CheckOutForm.css'
import { Alert, Button, CircularProgress } from '@mui/material';


const CheckOutForm = ({price,post}) => {
  const {_id,pubName,email}=post
  const stripe = useStripe();
  const elements = useElements();
   const  [error,setError]=useState('')
   const [success,setSuccess]=useState('')
   const [processing,setProcessing]=useState(false)
   const [clientSecret, setClientSecret] = useState("");

   useEffect(() => {
  
    fetch("https://mysterious-chamber-53519.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({price}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);


  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {
 
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setProcessing(true)

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message)
      setProcessing(false)
    } else {
      setError('')
      console.log('[PaymentMethod]', paymentMethod);
    }

    const {paymentIntent,error:intentError}=await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        name: pubName,
        email:email
      },
    },
  })
  if(intentError){
    setSuccess('')
    setError(intentError.message)
  }
  else{
    setSuccess("Your Payment is completed")
    setError('')
    console.log(paymentIntent);
    setProcessing(false)
    const payment={
     amount:paymentIntent.amount,
     created:paymentIntent.created,
     transaction:paymentIntent.client_secret.slice("_secret")[0]
    }
    fetch(`https://mysterious-chamber-53519.herokuapp.com/payment/${_id}`,{
      method:'PUT',
     headers:{
      'content-type':'application/json'
      },
     body:JSON.stringify(payment)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

  }
  };
    return (
        <div>
            <form className='mt-5' onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {processing ? <CircularProgress></CircularProgress>: <Button sx={{mt:4, backgroundColor:'#09344dc2' }} variant="contained" type="submit" disabled={!stripe || success}>
        Pay 100
      </Button>}
    </form>
    {
            error&&<Alert severity="error" sx={{mt:3,width:'50%',mx:'auto'}}>{error}</Alert>
    }
    {
            success&&<Alert severity="success" sx={{mt:3,width:'50%',mx:'auto'}}>{success}</Alert>
    }
        </div>
    );
};

export default CheckOutForm;