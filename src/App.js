import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GlobalLayout from './Layouts/GlobalLayout';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import CartPage from './Pages/CartPage';
import { useState, useEffect } from 'react';

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {
  const [cartList, setCartList] = useState([]);

  useEffect(()=>{
    const fetchItems = async () => {
      const result = await fetch(`${urlEndpoint}/items/all`)
      const fetchedItems = await result.json();
      setCartList(fetchedItems.item)
      console.log(fetchedItems)
    }
    fetchItems()
  }, [])

  

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
          path: "/registration",
          element: <RegistrationPage />,
        },
        {
          path: "/cartpage",
          element: <CartPage cartList={cartList} urlEndpoint={urlEndpoint}/>,
        }
      ]
    }
  ])

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
