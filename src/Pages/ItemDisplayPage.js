import React from 'react'
import ItemDisplayCard from '../Components/ItemDisplayCard';

const ItemDisplayPage = (props) => {
  const {handleAddCartItem} = props
  
  return (
    <div className="cartpage-main">
      ItemDisplayPage
      <div>
        {props.itemList.map((item, index) => {
          return (
            <ItemDisplayCard
              key={index}
              item={item}
              handleAddCartItem={handleAddCartItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemDisplayPage