import React from 'react'
import CartCard from '../Components/CartCard'

const CartPage = ({cartList}) => {
  return (
    <div className="cartpage-main">
      CartPage
    {/* {cartList.map((item, index)=>{
        return( <CartCard 
            key={index}
            item={item}
         />
        )
    })} */}
     
    </div>
  );
}

export default CartPage