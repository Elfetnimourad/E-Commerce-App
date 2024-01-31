import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { Rating } from "@mui/material";
import { Header } from "./Header";
import { Hero } from "./Hero";
import themeContext from "./Contextc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ShowProduct } from "./ShowProduct";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Footer } from "./Footer";

// const paragraphStyle = {
//   WebkitLineClamp: 3,
//   WebkitBoxOrient: "vertical",
//   overflow: "hidden",
//   display: "-webkit-box",
// };

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState({});
  const [showReadButton, setShowReadButton] = useState(true);
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);
  const [num, setNum] = useState(1);

  const fetchingProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((date) => {
        setData(date);
      });
  };
  console.log(data);
  useEffect(() => {
    fetchingProduct();
  }, []);

  const toggleFunction = () => {
    setIsOpen(!isOpen);
  };

  const addItem = (item) => {
    // setArr([...arr, item]);
    const depliArr = arr.find((e) => e.id === item.id);
    if (depliArr) {
      const arrUp = arr.map((e) => {
        if (e.title === item.title) {
          return { ...e, quantity: (e.quantity || 1) + 1 };
        } else {
          return e;
        }
      });
      setArr(arrUp);
    } else {
      setArr([...arr, item]);
    }
  };

  const countClick = () => {
    setCount(count + 1);
  };
  const doubleFunction = (item) => {
    countClick();
    addItem(item);
  };

  return (
    <themeContext.Provider
      value={{ arr, num, setNum, setArr, setData, setCount, count }}
    >
      <Header className="headerStyle" />
      <Hero />
      <h1 className="text-center">Our Store</h1>
      <div className="container">
        <div className="row">
          {data?.map((e, i) => (
            <Card
              key={e?.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
              data-testid="product-list-item"
            >
              <Link to={`/${e?.id}`}>
                <CardMedia
                  component="img"
                  alt="Product Image"
                  height="140"
                  image={e?.image}
                />
              </Link>
              <CardContent>
                <Typography variant="h6">{e?.title}</Typography>
                <Typography variant="subtitle1">{e?.category}</Typography>
                {/* Uncomment the following lines if you need description and read more button */}
                {/* <Typography
                  variant="body2"
                  color="text.secondary"
                  style={isOpen[e.id] ? null : paragraphStyle}
                >
                  {e.description}
                </Typography>
                {showReadButton && (
                  <Button onClick={() => toggleFunction(e.description)}>
                    {isOpen[e.id] ? "read less..." : "read more..."}
                  </Button>
                )} */}
                {/* Uncomment the following lines if you have the Rating information */}
                {/* <Rating
                  name="simple-controlled"
                  value={e?.rating?.rate}
                  precision={0.1}
                /> */}
                <Typography variant="body1" color="text.primary">
                  Price: {e?.price}$
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => doubleFunction(e)}
                >
                  Buy Here
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </themeContext.Provider>
  );
};
