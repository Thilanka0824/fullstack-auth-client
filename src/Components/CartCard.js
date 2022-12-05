import React from 'react'
import Counter from './Counter';

const CartCard = ({item}) => {
  
  
  return (
    <div className="item-display-card">
      <h2>{item.title}</h2>
      {/* <p>{item.description}</p> */}
      {/* <h6>Rated {item.rating}</h6> */}
      <br />
      <h4>${item.price}</h4>
      <Counter item={item}/>
    </div>
  );
}

export default CartCard