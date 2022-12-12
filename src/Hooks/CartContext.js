// import React, { useState, useEffect, useMemo, createContext, useContext } from "react";
// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [productList, setProductList] = useState([])
//   const [itemList, setItemList] = useState([]);
//   const [shoppingCartItems, setShoppingCartItems] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [itemCardTotal, setItemCardTotal] = useState(0);

//   const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
//   // useEffect(()=>{
//   //   const fetchProducts = async ()=>{
//   //     const result = await fetch("https://fakestoreapi.com/products");
//   //     const fetchedProducts = await result.json();
//   //     setProductList(fetchedProducts)
//   //     console.log(fetchedProducts)

//   //   }
//   //   fetchProducts()
//   // }, [])
//    useEffect(() => {
//      const fetchItems = async () => {
//        const result = await fetch(`${urlEndpoint}/items/all`);
//        const fetchedItems = await result.json();
//        setItemList(fetchedItems.item);
//        console.log(fetchedItems);
//      };
//      fetchItems();
//    }, []);

//   useEffect(() => {
//     const totalReducer = shoppingCartItems.reduce((acc, cur) => {
//       acc += cur.price * cur.cartCount;

//       return acc;
//     }, 0);
//     setTotal(totalReducer);
//   }, [itemCardTotal, total, shoppingCartItems]);

 
   

//   const value = useMemo(
//     () => ({
//       productList,
//       itemList,
//       itemCardTotal,
//       total,
//       shoppingCartItems,
//       // handleAddCartItem,
//     }),
//     [itemCardTotal, total, shoppingCartItems, productList,itemList]
//   );

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// export const useCart = () => {
//   return useContext(CartContext);
// }


