import React from "react";
import Rating from "./Rating";
import { useCart } from "../Hooks/CartContext";

const ItemDisplayCard = ({ 
  handleAddCartItem, handleRemoveCartItem, item 
}) => {
  // const Cart = useCart()

  

  return (
    <div className="item-display-card">
      <div className="item-display-card-element">
      <img src={item.image} style={{height:200, width: 200 }}></img>
      </div>    
      <div>
        <h3 className="item-display-card-element">{item.title}</h3>
        <p className="item-display-card-element">{item.description.slice(100, )}</p>
        <p className="item-display-card-element">Rated {item.rating.rate}</p>
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
            console.log("cartCount", item.cartCount)
          }}
        >
          Add
        </button>
        <button 
        className="item-display-card-element"
        onClick={()=>{
          handleRemoveCartItem(item)
        }}
        >Remove</button>
      </div>
    </div>
  );
};


export default ItemDisplayCard;
