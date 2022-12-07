import React from "react";
import Rating from "./Rating";

const ItemDisplayCard = (props) => {
  const { handleAddCartItem, item } = props;

  return (
    <div className="item-display-card">
      <div>
        <p className="item-display-card-element">{item.title}</p>
        <p className="item-display-card-element">{item.description}</p>
        <p className="item-display-card-element">Rated {item.rating}</p>
      </div>
      
      <div>
        <p className="item-display-card-element">${item.price}</p>

        {/* <div className="item-display-rating">
        <Rating value={item.rating} />{" "}
      </div> */}
        {/* text={`${item.numReviews} reviews`} */}
        <button
          className="item-display-card-element"
          onClick={() => {
            handleAddCartItem(item);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};


export default ItemDisplayCard;
