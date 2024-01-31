import React, { useContext, useEffect, useState } from "react";
import themeContext from "./Contextc";
import { useParams } from "react-router-dom";
import "./ShowingProduct.css";
import { Rating } from "@mui/material";
import { Header } from "./Header";

export const ShowProduct = () => {
  let api = "https://fakestoreapi.com/products";
  const params = useParams();
  const [products, setProducts] = useState(null);
  console.log(params);

  useEffect(() => {
    fetch(`${api}/${params.product}`)
      .then((res) => res.json())
      .then((date) => {
        setProducts(date);
        console.log(date);
      });
  }, []);
  return (
    <div>
      <div className="d-flex flex-row justify-content-center mt-4">
        <div
          key={products?.id}
          className="card d-flex flex-row w-75 cardStyle m-auto"
        >
          <img
            className="card-img-top h-100 w-25 col-5"
            src={products?.image}
            alt="Card image cap"
          />
          <div className="card-body col-7 w-75 float-right">
            <h4 className="card-title">{products?.title}</h4>
            <h5>{products?.category}</h5>
            <p className="card-text">{products?.description}</p>
            <Rating
              name="simple-controlled"
              value={products?.rating?.rate}
              precision={0.1}
            />

            <h6>Product Price : {products?.price} $</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
