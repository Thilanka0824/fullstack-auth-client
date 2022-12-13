import React, { useEffect } from "react";
import { useCart } from "../Hooks/CartContext";
import ItemDisplayPageCartCard from "./ItemDisplayPageCartCard";
import ItemDisplayPageCartDisplay from "./ItemDisplayPageCartDisplay";

const ItemDisplayPageCart = () => {
  const Cart = useCart()
  // useEffect(() => {
  //   const totalReducer = shoppingCartItems.reduce((acc, cur) => {
  //     acc += cur.price * cur.cartCount;

  //     return acc;
  //   }, 0);
  //   setTotal(totalReducer);
  // }, [itemCardTotal, total, shoppingCartItems]);

  return (
    <div>
      ItemDisplayPageCartDisplay
      <ItemDisplayPageCartDisplay
        
      />
      ItemDisplayPageCart
      
      <div className="item-display-page-cart">
        {Cart.shoppingCartItems.map((item, index) => {
          return (
            item.cartCount > 0 &&
            <ItemDisplayPageCartCard
              key={index}
              item={item}
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemDisplayPageCart;
