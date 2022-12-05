import React from 'react'
import { useState } from 'react';

const Counter = ({item}) => {
    const [count, setCount] = useState(item.cartCount);



  return (
    <div>
      <button
        className="cart-count-button"
        onClick={() => {
          setCount(count + 1);
          
        }}
      >
        plus
      </button>
      <h1>{count}</h1>
      <button
        className="cart-count-button"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        minus
      </button>

      {}
    </div>
  );
}

export default Counter