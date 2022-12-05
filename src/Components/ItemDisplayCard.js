import React from "react";
import Rating from "./Rating";

const ItemDisplayCard = (props) => {
  const { handleAddCartItem, item } = props;

  return (
    <div className="item-display-card">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <h6>Rated {item.rating}</h6>
      <br />
      <h4>${item.price}</h4>

      {/* <div className="item-display-rating">
        <Rating value={item.rating} />{" "}
      </div> */}
      {/* text={`${item.numReviews} reviews`} */}
      <button
        onClick={() => {
          handleAddCartItem(item);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemDisplayCard;
