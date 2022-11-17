import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GlobalLayout from './Layouts/GlobalLayout';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';

function App() {
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
          element: <RegistrationPage />
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
