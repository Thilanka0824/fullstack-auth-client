import React from 'react'

const ItemDisplayPageCartDisplay = ({
  item,
  shoppingCartItems,
  total,
  setTotal,
  itemCardTotal,
  setItemCardTotal,
}) => {
  return <div>
  {/* {shoppingCartItems.price} */}
  Cart Total: ${total}
  </div>;
};

export default ItemDisplayPageCartDisplay