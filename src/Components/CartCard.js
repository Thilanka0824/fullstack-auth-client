import React, { useEffect } from "react";
import { useState } from "react";
// import Counter from './Counter';

const CartCard = ({ item, shoppingCartItems, total, setTotal }) => {
  const [count, setCount] = useState(item.cartCount);
  const [itemCardTotal, setItemCardTotal] = useState(0);

  useEffect(() => {
    const totalReducer = shoppingCartItems.reduce((acc, cur) => {
      
      acc += cur.price * cur.cartCount;
     
      return acc;
    }, 0);
    setTotal(totalReducer); 
  });

  // useEffect(()=> {
  //   const itemTotalReducer = shoppingCartItems.reduce((acc, cur)=>{
      
      
  //     return acc
  //   }, 0)
  // })
  return (
    <div className="item-display-card">
      <h2>{item.title}</h2>
      {/* <p>{item.description}</p> */}
      {/* <h6>Rated {item.rating}</h6> */}
      <br />

      <h4>Price: ${item.price}</h4>
      
      {/* <h3>{total}</h3> */}
      <h3>item count: {count}</h3>
      <h3>subtotal: {count * item.price}</h3>
      {/* <h3>final: {total * count}</h3> */}
      {/* <Counter item={item} cartList={cartList}/> */}
    </div>
  );
};

export default CartCard;
