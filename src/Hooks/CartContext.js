import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
  useContext,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //   const [productList, setProductList] = useState([])
  const [itemList, setItemList] = useState([]);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemCardTotal, setItemCardTotal] = useState(0);

  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
  // useEffect(()=>{
  //   const fetchProducts = async ()=>{
  //     const result = await fetch("https://fakestoreapi.com/products");
  //     const fetchedProducts = await result.json();
  //     setProductList(fetchedProducts)
  //     console.log(fetchedProducts)

  //   }
  //   fetchProducts()
  // }, [])
  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch(`${urlEndpoint}/items/all`);
      const fetchedItems = await result.json();
      setItemList(fetchedItems.item);
      console.log(fetchedItems);
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const totalReducer = shoppingCartItems.reduce((acc, cur) => {
      acc += cur.price * cur.cartCount;
      return acc;
    }, 0);
    setTotal(totalReducer);
  }, [itemCardTotal, total, shoppingCartItems]);

  const handleAddCartItem = (item) => {
    //item is the object that will be created.
    const foundIndex = shoppingCartItems.findIndex((currentItem) => {
      // console.log(shoppingCartItems);
      return currentItem._id === item._id;
    });

    // console.log(foundIndex);
    if (foundIndex === -1) {
      //if item is not in shoppingCartItems
      setShoppingCartItems([...shoppingCartItems, { ...item, cartCount: 1 }]);
      // setCount(item.cartCount)
    } else {
      const updateCartItem = shoppingCartItems.map((cartItem) => {
        if (cartItem._id === item._id) {
          //if cartItem is the same as item.id
          cartItem.cartCount++;
          return cartItem;
        } else {
          return cartItem;
        }
      });
      setShoppingCartItems(updateCartItem);
    }
  };

  const handleRemoveCartItem = (item) => {
    //item is the object that will be created.
    // const foundIndex = shoppingCartItems.findIndex((currentItem) => {
    //   // console.log(shoppingCartItems);
    //   return currentItem._id === item._id;
    // });

    const updateCartItem = shoppingCartItems.map((cartItem) => {
      console.log(cartItem);
      if (cartItem._id === item._id) {
        if (cartItem.cartCount > 0) {
          cartItem.cartCount--;
          return cartItem;
        } else {
          return cartItem;
        }
      } else {
        return cartItem;
      }
    });
    setShoppingCartItems(updateCartItem);
    console.log(updateCartItem);
  };

  const value = useMemo(
    () => ({
      //   productList,
      itemList,
      itemCardTotal,
      total,
      shoppingCartItems,
      handleAddCartItem,
      handleRemoveCartItem,
    }),
    [itemCardTotal, total, shoppingCartItems, itemList, handleAddCartItem]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
