import React from "react";
import { AiOutlineImport } from "react-icons/ai";
import ItemDisplayCard from "../Components/ItemDisplayCard";
import ItemDisplayPageCart from "../Components/ItemDisplayPageCart";
import CartPage from "./CartPage";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ItemDisplayPage = ({
  handleAddCartItem,
  itemList,
  shoppingCartItems,
  setShoppingCartItems,
  total,
  setTotal,
  itemCardTotal,
  setItemCardTotal,
}) => {
  return (
    <div className="item-display-page-container">
      {}
      <div className="item-display-page-item-list-div">
        {itemList.map((item, index) => {
          return (
            <ItemDisplayCard
              key={index}
              item={item}
              handleAddCartItem={handleAddCartItem}
            />
          );
        })}
      </div>
      {shoppingCartItems.length > 0 ? (
        <div className="item-display-page-cart-div">
          <ItemDisplayPageCart
            shoppingCartItems={shoppingCartItems}
            setShoppingCartItems={setShoppingCartItems}
            total={total}
            setTotal={setTotal}
            itemCardTotal={itemCardTotal}
            setItemCardTotal={setItemCardTotal}
          />
          hi
        </div>
      ) : (
        <div className="no-item-in-cart-photo">
          <div></div>
          <AiOutlineShoppingCart size={50} />
          <h1>Empty Cart</h1>
        </div>
      )}
    </div>
  );
};

export default ItemDisplayPage;
