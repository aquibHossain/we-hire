import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      style={{ backgroundColor: "#09344dc2", color: "white" }}
    >
      <Box className="container-fluid px-5">
        <Box className="row py-5">
          <div className="col-sm-12 col-md-6 col-lg-3  text-center text-lg-start">
            <h1 className="fw-bold text-danger">Vara Koto</h1>
            <p className="lh-lg fw-light">
            বাসা ভাড়া দেওয়া এবং বাসা ভাড়া খোঁজার একটি ডিজিটাল প্লাটফর্ম। 
            </p>
            <h4 className="mt-4">
              <i className="fab fa-facebook me-3"></i>
              <i className="fab fa-twitter me-3"></i>
              <i className="fab fa-youtube me-3"></i>
              <i className="fab fa-instagram "></i>
            </h4>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 text-center ">
            <h4>CONTACT US</h4>
            <p className="lh-lg fw-light">
              No: 58 A, East Madison Street,
              <br />
              Baltimore,Khulna,Bangladesh.
              <br />
              <i className="fas fa-phone-alt"></i> +880-1982690790 <br />{" "}
              <i className="far fa-envelope"></i> hossainaquib20@gmail.com
            </p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 text-center">
            <h4>SUPPORT</h4>
            <p className="fw-light">24/7 support</p>
            <p className="fw-light">Shopify Help Center</p>
            <p className="fw-light">Free tools</p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <img
              className="img-fluid w-75 "
              src="https://www.nicepng.com/png/full/87-870350_credit-cards-all-credit-card-logos.png"
              alt=""
            />
          </div>
        </Box>
      </Box>
      <Box className=" container border-top text-center ">
        <Typography  className="p-2 ">© 2022 Vara Koto, All Rights Reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
