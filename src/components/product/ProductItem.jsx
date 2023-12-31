import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ product, onItemClick }) => {
  const handleItemClick = () => {
    onItemClick(product);
  };

  return (
    <div>
      <ul>
        <li style={{ listStyleType: "none" }} onClick={handleItemClick}>
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
      </ul>
      <hr />
    </div>
  );
};

// Add prop-types definition
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_front: PropTypes.string.isRequired,
    image_back: PropTypes.string.isRequired
  }).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default ProductItem;
