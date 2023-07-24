import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ products, onItemClick }) => {
  const handleItemClick = (product) => {
    // Call the onItemClick function when an item is clicked
    onItemClick(product);
  };

  return (
    <div>
      <ul>
        {products &&
          products.map((product, index) => (
            <li
              key={index}
              style={{ listStyleType: "none" }}
              onClick={() => handleItemClick(product)} // Call the handler on item click
            >
              <h3>{product.name}</h3>
              <span>
                <img
                  src={product.image_front}
                  alt={product.name}
                  style={{ width: "200px", height: "220px" }}
                />
                <img
                  src={product.image_back}
                  alt={product.name}
                  style={{ width: "200px", height: "220px" }}
                />
              </span>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        <hr />
      </ul>
      <p>additional content</p>
    </div>
  );
};

// Add prop-types definition
ProductItem.propTypes = {
  products: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_front: PropTypes.string.isRequired,
    image_back: PropTypes.string.isRequired
  }).isRequired
};

export default ProductItem;
