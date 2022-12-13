import React from 'react'
import { useCart } from '../Hooks/CartContext';

const ItemDisplayPageCartCard = ({
  item

}) => {
  const Cart = useCart()
    

  return (
    <div className="item-display-page-cart-card-container">
      {/* ItemDisplayPageCartCard */}
      <div className="item-display-page-cart-card-div-left">
        <h5>{item.title}</h5>
        <p>price: {item.price}</p>
        <p>subtotal: {item.price * item.cartCount}</p>
        {/* <h3>Count: {count}</h3> */}
      </div>

      <div className="item-display-page-cart-card-div-right">
        <p>item count</p>
        <p>{item.cartCount}</p>
        
      </div>
    </div>
  );
  
};

export default ItemDisplayPageCartCard