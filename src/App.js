import React from "react";
import "../src/styles.css";
import prod1_front from "../src/assets/images/product1-front.png";
import prod1_back from "../src/assets/images/product1-back.png";

import prod2_front from "../src/assets/images/product2-front.png";
import prod2_back from "../src/assets/images/product2-back.png";

import prod3_front from "../src/assets/images/product3-front.png";
import prod3_back from "../src/assets/images/product3-back.png";

import prod4_front from "../src/assets/images/product4-front.png";
import prod4_back from "../src/assets/images/product4-back.png";
import ProductItem from "./components/product/ProductItem";

ProductItem;
export default function App() {
  const products = [
    {
      name: "Product 1",
      price: 19.99,
      image_front: prod1_front,
      image_back: prod1_back,
      id: 1
    },
    {
      name: "Product 2",
      price: 29.99,
      image_front: prod2_front,
      image_back: prod2_back,
      id: 2
    },
    {
      name: "Product 3",
      price: 19.99,
      image_front: prod3_front,
      image_back: prod3_back,
      id: 3
    },
    {
      name: "Product 4",
      price: 29.99,
      image_front: prod4_front,
      image_back: prod4_back,
      id: 4
    }
    // Add more product objects as needed
  ];
  const handleItemClick = (product) => {
    // Perform any action with the clicked product
    console.log("Clicked product:", product);
  };

  return (
    <div className="App">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          product={products}
          image_front={product.image_front}
          image_back={product.image_back}
          onItemClick={handleItemClick}
        />
      ))}
    </div>
  );
}
