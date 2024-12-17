import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';

import ProductCards from './Components/ProductCards/ProductCards';
import AllProducts from './Components/AllProducts/AllProducts';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('./../public/Category.json'),
        children:[
          {
            path:"/",
            element:<ProductCards></ProductCards>,
            loader: ()=> fetch('../public/Products.json')
          },
          {
            path:"/category/:category",
            element:<ProductCards></ProductCards>,
            loader: ()=> fetch('../public/Products.json')
          },
          
        ]
        
      },
      {
        path:"/Statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/Dashboard",
        element:<Dashboard></Dashboard>,
        children:[
          // {
          //   path:"/",
          //   element:<Cart></Cart>,
            
          // }
        ]
      },
      {
        path:"/AllProducts",
        element:<AllProducts></AllProducts>,
        loader: ()=> fetch('../public/Products.json')
      },
      {
        path:"/product/:id",
        element:<ProductDetails></ProductDetails>,
        loader: ()=> fetch('../public/Products.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
