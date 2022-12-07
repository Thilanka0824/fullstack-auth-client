import React from "react";
import { useState, createContext, useEffect } from "react";
import CartCard from "../Components/CartCard";


// const NameContext = createContext();

const CartPage = ({ shoppingCartItems, total, setTotal, itemCardTotal, setItemCardTotal }) => {
  
   

  // const onTotalChange = (total) => {
    
  // };



  return (
    <div className="cartpage-main">
      <div>
        <h2>Cart Total ${total}</h2>
      </div>
      {/* <div>
        <h1>CartList Length</h1>
        <h1>{shoppingCartItems.length}</h1>
        <h1>{}</h1>
      </div> */}
      <div>
        {shoppingCartItems.map((item, index) => {
          return (
            <CartCard
              key={index}
              item={item}
              shoppingCartItems={shoppingCartItems}
              total={total}
              setTotal={setTotal}
              itemCardTotal={itemCardTotal}
              setItemCardTotal={setItemCardTotal}
              // onTotalChange={onTotalChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
