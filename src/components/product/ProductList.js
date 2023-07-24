import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onItemClick }) => {
  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onItemClick={onItemClick}
            />
          ))}
      </div>
    </div>
  );
};
// Add prop-types definition
ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image_front: PropTypes.string.isRequired,
      image_back: PropTypes.string.isRequired
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default ProductList;
