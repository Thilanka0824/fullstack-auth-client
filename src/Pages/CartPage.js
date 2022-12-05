import React, { useEffect } from "react";
import { useState, createContext } from "react";
import CartCard from "../Components/CartCard";
import Counter from "../Components/Counter";

const NameContext = createContext()


const CartPage = ({ cartList, count }) => {
  const cartTotal = 10
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    
      const totalReducer = cartList.reduce((acc, cur) => {
        acc += cur.price;

        return acc;
      }, 0);
    setTotal(totalReducer)
  })




  return (
    <div className="cartpage-main">
      <div>
        {cartList.map((item, index) => {
          return <CartCard key={index} item={item} />;
        })}
      </div>
      <div>
        <h2>
          Cart Total ${total}
          
        </h2>
      </div>
    </div>
  );
};



// import React, { useState } from 'react';

// const CartPage = () => {
//   const [items, setItems] = useState([]);
//   const [total, setTotal] = useState(0);

//   function handleAddToCart(item) {
//     setItems([...items, item]);
//     setTotal(total + item.price);
//   }

//   function handleRemoveFromCart(item) {
//     setItems(items.filter(index => index.id !== item.id));
//     setTotal(total - item.price);
//   }

//   function AddToCart({ onAddToCart }) {
//     const [item, setItem] = useState({});

//     function handleChange(event) {
//       const { name, value } = event.target;
//       setItem({ ...item, [name]: value });
//     }
//   }


//   return (
//     <div className="cartpage-main">
//       <h1>Shopping Cart</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//             <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <h3>Total: ${total}</h3>
//       <AddToCart onAddToCart={handleAddToCart} />
//     </div>
//   );
// }


export default CartPage