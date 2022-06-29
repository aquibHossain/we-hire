import { Alert, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hook/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleSubmit = (e) => {
    const user = { email };
    fetch("https://mysterious-chamber-53519.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
      e.preventDefault()
  };
  const emailRef = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <Typography variant="h3" className="div" sx={{ fontWeight: "bold",mx:'auto', my: 5,color:"#2b7377"  }}>
        Make Admin
      </Typography>
      <form action="" onSubmit={handleSubmit}>
        <TextField
        required
          sx={{ mr: 3 }}
          onChange={emailRef}
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <Button
          type="submit"
          variant="contained"
          className="mt-2"
          style={{ backgroundColor: "#5CE7ED" }}
        >
          Submit
        </Button>
      </form>
      {success && (
        <Alert className="w-50 mx-auto mt-5" severity="success">
          Admin Added Successfully
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
