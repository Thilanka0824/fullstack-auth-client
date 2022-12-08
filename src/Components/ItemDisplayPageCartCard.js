import React from 'react'
import { useState, useEffect } from 'react';

const ItemDisplayPageCartCard = ({
  item,  
  shoppingCartItems,
  setShoppingCartItems,
  total,
  setTotal,
  itemCardTotal,
  setItemCardTotal,

}) => {
    console.log(item.cartCount);
    const [count, setCount] = useState(item.cartCount);
    // const [itemCardTotal, setItemCardTotal] = useState(0);

    useEffect(() => {
      const totalReducer = shoppingCartItems.reduce((acc, cur) => {
        acc += cur.price * cur.cartCount;

        return acc;
      }, 0);
      setTotal(totalReducer);
    }, [itemCardTotal, total, count]); //why doesn't totalReducer run when the value in itemCardTotal changes

    useEffect(() => {
      setItemCardTotal(item.price * count); //sets the itemCardTotal variable
    }, [count, item]);

    const handleIncrement = () => {
      setCount(count + 1); // sets the count variable
      
    };

    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
     

  return (
    <div className="item-display-page-cart-card-container">
      {/* ItemDisplayPageCartCard */}
      <div className="item-display-page-cart-card-div-left">
        <h5>{item.title}</h5>
        <p>price: {item.price}</p>
        <p>subtotal: {item.price * item.cartCount}</p>
      </div>

      <div className="item-display-page-cart-card-div-right">
        <p>{item.cartCount}</p>
        <button
          className="item-display-page-cart-card-div-right-button"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="item-display-page-cart-card-div-right-button"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
  
};

export default ItemDisplayPageCartCard