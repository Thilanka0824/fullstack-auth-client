import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import './AppGrid.css'
import { useState, useEffect } from "react";
import GlobalLayout from "./Layouts/GlobalLayout";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import CartPage from "./Pages/CartPage";
import ItemDisplayPage from "./Pages/ItemDisplayPage";
import ProfilePage from "./Pages/ProfilePage";
import { CartProvider } from "./Hooks/CartContext";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

const urlEndpointFakeStore = process.env.REACT_APP_URL_FAKE_STORE_ENDPOINT;

function App() {
  // const [itemList, setItemList] = useState([]);
  // const [shoppingCartItems, setShoppingCartItems] = useState([]);
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(0);
  // const [itemCardTotal, setItemCardTotal] = useState(0);
  

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await fetch(`${urlEndpoint}/items/all`);
  //     const fetchedItems = await result.json();
  //     setItemList(fetchedItems.item);
  //     // console.log(fetchedItems);
  //   };
  //   fetchItems();
  // }, []);

  // // useEffect(()=>{
  // //   const fetchProducts = async ()=>{
  // //     const result = await fetch("https://fakestoreapi.com/products");
  // //     const fetchedProducts = await result.json();
  // //     setItemList(fetchedProducts)
  // //     // console.log(fetchedProducts)

  // //   }
  // //   fetchProducts()
  // // }, [])

  // useEffect(() => {
  //   const totalReducer = shoppingCartItems.reduce((acc, cur) => {
  //     acc += cur.price * cur.cartCount;

  //     return acc;
  //   }, 0);
  //   setTotal(totalReducer);
  // }, [itemCardTotal, total]); 

  // const handleAddCartItem = (item) => {
  //   //item is the object that will be created.
  //   const foundIndex = shoppingCartItems.findIndex((currentItem) => {
  //     // console.log(shoppingCartItems);
  //     return currentItem._id === item._id;
  //   });

  //   // console.log(foundIndex);
  //   if (foundIndex === -1) {
  //     //if item is not in shoppingCartItems
  //     setShoppingCartItems([...shoppingCartItems, { ...item, cartCount: 1 }]);
  //     // setCount(item.cartCount)
  //   } else {
  //     const updateCartItem = shoppingCartItems.map((cartItem) => {
  //       if (cartItem._id === item._id) {
  //         //if cartItem is the same as item.id
  //         cartItem.cartCount++;
  //         return cartItem;
  //       } else {
  //         return cartItem;
  //       }
  //     });
  //     setShoppingCartItems(updateCartItem);
      
  //   }
  // };

  // const handleRemoveCartItem = (item) => {
  //   //item is the object that will be created.
  //   // const foundIndex = shoppingCartItems.findIndex((currentItem) => {
  //   //   // console.log(shoppingCartItems);
  //   //   return currentItem._id === item._id;
  //   // });
    
    
  //   const updateCartItem = shoppingCartItems.map((cartItem) => {
  //    console.log(cartItem)
  //     if (cartItem._id === item._id) {
    
  //       if(cartItem.cartCount > 1){
  //       cartItem.cartCount--;
  //       return cartItem;
  //     } 
  //     else  {
  //       return cartItem;
  //     }
  //   } else {
  //     return cartItem
  //   }
  //   });
  //   setShoppingCartItems(updateCartItem);
  //   console.log(updateCartItem)
  // }
  // console.log(shoppingCartItems);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/display",
          element: (
            <ItemDisplayPage
              // itemList={itemList}
              // urlEndpoint={urlEndpoint}
              // handleAddCartItem={handleAddCartItem}
              // handleRemoveCartItem={handleRemoveCartItem}
              // shoppingCartItems={shoppingCartItems}
              // total={total}
              // setTotal={setTotal}
              // itemCardTotal={itemCardTotal}
              // setItemCardTotal={setItemCardTotal}
              // count={count}
            />
          ),
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/registration",
          element: <RegistrationPage />,
        },
        {
          path: "/cartpage",
          element: (
            <CartPage />
          ),
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
          <RouterProvider router={router} />
          {/* All router objects are passed to this component to render your app and enable the rest of the APIs. */}
      </header>
    </div>
  );
}

export default App;

/*
Order Creation Route
- Client would send user id token (with user id in the token payload), items in the cart + quantity, cart total
- Server would create a new order document in the order collection that has the above info saved on it
	- Items as an array of items with item price and quantity attached
	- Order total
	- User id
*/
