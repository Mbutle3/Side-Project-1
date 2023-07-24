import React from "react";
import PropTypes from "prop-types";
import { ProductItem } from "./ProductItem";

const ProductDetail = ({ product, onAddToCart }) => {
  const { id, name, price, image, description, reviews, relatedProducts } =
    product;

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>{id} </p>
      <img src={image} alt={name} style={{ width: "300px", height: "300px" }} />
      <p>Price: ${price}</p>
      <p>{description}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>

      <h2>Customer Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>

      <h2>Related Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {relatedProducts.map((relatedProduct) => (
          <ProductItem key={relatedProduct.id} product={relatedProduct} />
        ))}
      </div>
    </div>
  );
};

// Add prop-type definition
ProductDetail.propTypes = {
  product: PropTypes.shape({
    // Define the shape of the 'product' object here
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
    relatedProducts: PropTypes.arrayOf(
      PropTypes.shape({
        // Define the shape of each 'relatedProduct' object here
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        reviews: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    ).isRequired
    // Add other prop-types for 'product' as needed
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductDetail;
