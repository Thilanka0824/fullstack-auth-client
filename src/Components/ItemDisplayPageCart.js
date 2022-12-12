import React, { useEffect } from "react";

import ItemDisplayPageCartCard from "./ItemDisplayPageCartCard";
import ItemDisplayPageCartDisplay from "./ItemDisplayPageCartDisplay";

const ItemDisplayPageCart = ({
  shoppingCartItems,
  setShoppingCartItems,
  total,
  setTotal,
  itemCardTotal,
  setItemCardTotal,
  handleAddCartItem,
}) => {
  useEffect(() => {
    const totalReducer = shoppingCartItems.reduce((acc, cur) => {
      acc += cur.price * cur.cartCount;

      return acc;
    }, 0);
    setTotal(totalReducer);
  }, [itemCardTotal, total, shoppingCartItems]);

  return (
    <div>
      <ItemDisplayPageCartDisplay
        shoppingCartItems={shoppingCartItems}
        total={total}
        setTotal={setTotal}
        itemCardTotal={itemCardTotal}
        setItemCardTotal={setItemCardTotal}
      />
      {/* ItemDisplayPageCart */}
      <div className="item-display-page-cart">
        {shoppingCartItems.map((item, index) => {
          return (
            <ItemDisplayPageCartCard
              key={index}
              item={item}
              shoppingCartItems={shoppingCartItems}
              setShoppingCartItems={setShoppingCartItems}
              total={total}
              setTotal={setTotal}
              itemCardTotal={itemCardTotal}
              setItemCardTotal={setItemCardTotal}
              handleAddCartItem={handleAddCartItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemDisplayPageCart;
