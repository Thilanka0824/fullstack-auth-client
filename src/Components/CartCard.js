import React, { useEffect } from "react";
import { useState } from "react";
// import Counter from './Counter';

const CartCard = ({
  item,
  shoppingCartItems,
  // setShoppingCartItems,
  handleAddCartItem,
  total,
  setTotal,
  itemCardTotal,
  setItemCardTotal,
}) => {
  const [count, setCount] = useState(item.cartCount);
  // const [itemCardTotal, setItemCardTotal] = useState(0);

  // useEffect(() => {
  //   const totalReducer = shoppingCartItems.reduce((acc, cur) => {
  //     acc += cur.price * cur.cartCount;

  //     return acc;
  //   }, 0);
  //   setTotal(totalReducer);
  // }, [itemCardTotal, total, count]); //why doesn't totalReducer run when the value in itemCardTotal changes

  // useEffect(() => {
  //   setItemCardTotal(item.price * count); //sets the itemCardTotal variable
  // }, [itemCardTotal, total, count, item]);

  const handleIncrement = () => {
    setCount(count + 1); // sets the count variable
    handleAddCartItem(item);
    // setTotal(count * item.price)
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);

    }
  };

  return (
    <div className="cart-item-display-card">
      <div className="cart-card-inner-div">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        {/* <h6>Rated {item.rating}</h6> */}
        <br />

        <h4>Price: ${item.price}</h4>
      </div>
      <div className="cart-card-inner-div">
        <h2>{count}</h2>
        <button className="cart-count-button" onClick={handleAddCartItem}>
          +
        </button>
        <button className="cart-count-button" onClick={handleDecrement}>
          -
        </button>
        {/* <h3>{total}</h3> */}

        <h3 className="cart-card-subtotal">subtotal: {count * item.price}</h3>
      </div>

      <h4>{}</h4>

      {/* <h3>final: {total * count}</h3> */}
      {/* <Counter item={item} cartList={cartList}/> */}
    </div>
  );
};

export default CartCard;
