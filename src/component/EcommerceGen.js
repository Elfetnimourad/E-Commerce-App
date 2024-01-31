import React from "react";
import { Header } from "./Header";
import "./EcommerceGen.css";
import { Hero } from "./Hero";
import { ProductList } from "./ProductList";
import { Footer } from "./Footer";
import { DiscoverUs } from "./DiscoverUs";

export const EcommerceGen = () => {
  return (
    <div className="ecommerceGen">
      <ProductList />
      <Footer />
    </div>
  );
};
