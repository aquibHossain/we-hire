import { Avatar, Container, Grid, Typography } from "@mui/material";
import dedent from "dedent";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import SearchList from "../Pages/SearchList/SearchList";
import "./Details.css";
const Details = () => {
  const { id } = useParams();
  const [details, setdetails] = useState({});
  useEffect(() => {
    fetch(`https://we-hire-database.onrender.com/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setdetails(data);
      });
  }, [id]);
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://we-hire-database.onrender.com/search/${details[0]?.category}`)
      .then((res) => res.json())
      .then((data) => setCategories(data.filter(cat => cat._id !== details[0]._id)));
  }, [details[0]?._id])
  const reserve = "https://i.ibb.co/1zbBh1f/pngwing-com-1.png";
  return (
    <div>
      <Container sx={{ mt: 11, pb: 5 }}>
        <Grid container spacing={5}>
          <Grid style={{ textAlign: 'left' }} item xs={12} md={9} sm={8}>
            <img
              width={"100%"}
              height={350}
              src={details[0]?.url || reserve}
              alt=""
            />
            <Typography className="mt-3 fw-bold" variant="h3">
              {details[0]?.name}
            </Typography>

            <Typography className="my-3 ">
              <span style={{ fontWeight: "bold" }}>Location:</span>{details[0]?.location}
            </Typography>
            <Typography className="my-3 " >
              <span style={{ fontWeight: "bold" }}>District:</span>{details[0]?.areas}
            </Typography>
            <hr />
            <Typography style={{ whiteSpace: "pre-wrap" }}>{dedent(`${details[0]?.description}`)}</Typography>
          </Grid>
          <Grid item xs={12} md={3} sm={4}>
            <div className="price-box">
              <Typography variant="h5" className="mb-2 fw-bold">
                ভাড়ার পরিমান
              </Typography>
              <Typography>৳ {details[0]?.price}</Typography>
            </div>
            <div className="price-box">
              <Typography variant="h5" className="mb-2 fw-bold">
                Contact Publisher
              </Typography>
              <Avatar
                alt={details[0]?.pubName}
                src={details[0]?.pubPic || "/static/images/avatar/1.jpg"}
                sx={{ width: 65, height: 65, mx: "auto", my: 2 }}
              />
              <Typography>
                {" "}
                <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
                {details[0]?.pubName}
              </Typography>
              <Typography>
                {" "}
                <span style={{ fontWeight: "bold" }}>Phone:</span> +880
                {details[0]?.number}
              </Typography>
            </div>
            <div className="safe-box">
              <Typography variant="h5" className="mb-2 fw-bold ">
                {" "}
                Stay Safe{" "}
              </Typography>
              <ul>
                <li>
                  দূর থেকে বিকাশ, নগদ, রকেট কিংবা অনলাইনে টাকা পাঠাবেন না।
                </li>
                <li>
                  নিজে স্বশরীরে গিয়ে বাসা দেখে পছন্দ হলেই কেবল এডভান্স পরিশোধ
                  করবেন। বাসা দেখতে একা না যাওয়াই ভালো।
                </li>
                <li>সন্দেহজনক কোন এড দেখলে রিপোর্ট করুন।</li>
                <li>
                  মালিক কিংবা ইউজারের সাথে আমাদের কোন সম্পর্ক নেই। তাই কোন
                  আর্থিক অনিয়মের দায় আমাদের নয়। ধন্যবাদ
                </li>
              </ul>
            </div>
            <div className="share-box">
              <Typography variant="h5" className="mb-2 fw-bold">
                Share This
              </Typography>
              <img src="https://i.ibb.co/88HpTcx/icons8-facebook-48.png" />
              <img
                width={"25%"}
                src="https://i.ibb.co/MMFqrc0/icons8-twitter.gif"
              />
              <img
                width={"25%"}
                src="https://i.ibb.co/jr7qjN6/icons8-instagram.gif"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <Typography
              variant="h3"
              sx={{ fontFamily: "initial", mx: 'auto', fontWeight: "bold", mb: 8, color: '#2b7377' }}
              className="div"
            >
              Related Post
            </Typography>

            <Grid container spacing={3}>
              {categories.slice(0, 4).map((list) => (
                <SearchList key={list._id} list={list}></SearchList>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Details;
