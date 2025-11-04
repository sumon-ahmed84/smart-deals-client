import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import AllProducts from './components/allporducts/AllProducts.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Register from './components/register/Register.jsx';
import Login from './components/login/Login.jsx';
import Myproducts from './components/myproducts/Myproducts.jsx';
import Mybids from './components/mybids/Mybids.jsx';
import PrivateRoute from './Routes/PrivaeRoute.jsx';
import ProductsDetales from './components/productsdetales/ProductsDetales.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'allproducts',
        Component:AllProducts,
      },
      {
        path:'/register',
        Component:Register,
      },
      {
        path:'/login',
        Component:Login,
      },
      {
        path:'/myproducts',
        element:<PrivateRoute><Myproducts></Myproducts></PrivateRoute>,
      },
      {
        path:'/mybids',
        element:<PrivateRoute><Mybids></Mybids></PrivateRoute>,
      },
      {
        path:'/productsdetales/:id',
        loader:({params})=>fetch(`http://localhost:3000/products/${params.id}`),
        element:<PrivateRoute><ProductsDetales></ProductsDetales></PrivateRoute>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
