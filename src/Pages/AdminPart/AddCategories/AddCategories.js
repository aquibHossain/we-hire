import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddCategories = () => {
  const [name, setName] = useState("");
  const [url, seturl] = useState("");
  const nameRef = (e) => {
    setName(e.target.value);
  };
  const urlRef = (e) => {
    seturl(e.target.value);
  };

  const handleSubmit = (e) => {
    const newCategory = { name, url };
    console.log(newCategory);
    fetch("https://we-hire-database.vercel.app/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Category Added");
          e.target.reset();
        }
        console.log(data);
      });
    e.preventDefault();
  };
  return (
    <div>
      <Typography variant="h3" className='div' sx={{ fontWeight: "bold", mx: 'auto', my: 5, color: "#2b7377" }}>
        Add Categories
      </Typography>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          required
          onChange={nameRef}
          id="standard-basic"
          label="Name"
          variant="standard"
          sx={{ my: 3 }}
        />
        <br></br>
        <TextField
          required
          onChange={urlRef}
          id="standard"
          label="Photo url"
          variant="standard"
          sx={{ mb: 3 }}
        />
        <br></br>
        <Button
          variant="contained"
          type="submit"
          style={{ backgroundColor: "#5CE7ED" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddCategories;
