import React from 'react'
import { useCart } from '../Hooks/CartContext';

const ItemDisplayPageCartDisplay = ({
  // item,
  // shoppingCartItems,
  // total,
  // setTotal,
  // itemCardTotal,
  // setItemCardTotal,
}) => {
const Cart = useCart()


  return <div>
  {/* {shoppingCartItems.price} */}
  Cart Total: ${Cart.total}
  </div>;
};

export default ItemDisplayPageCartDisplay