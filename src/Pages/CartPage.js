import React from "react";
import { useState, createContext, useEffect } from "react";
import { useCart } from "../Hooks/CartContext";
import CartCard from "../Components/CartCard";


const CartPage = () => {
  
   const Cart = useCart()

  // const onTotalChange = (total) => {
    
  // };



  return (
    <div className="cartpage-main">
      <div>
        <h2>Cart Total ${Cart.total}</h2>
      </div>
      {/* <div>
        <h1>CartList Length</h1>
        <h1>{shoppingCartItems.length}</h1>
        <h1>{}</h1>
      </div> */}
      <div>
        {Cart.shoppingCartItems.map((item, index) => {
          return (
            <CartCard
              key={index}
              item={item}
              // shoppingCartItems={shoppingCartItems}
              // total={total}
              // setTotal={setTotal}
              // itemCardTotal={itemCardTotal}
              // setItemCardTotal={setItemCardTotal}
              // onTotalChange={onTotalChange}
            />
          );
        })}
        {console.log(Cart.shoppingCartItems)}
      </div>
    </div>
  );
};

export default CartPage;
