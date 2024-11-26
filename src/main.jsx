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
import Phone from './Components/Phone/Phone';
import Laptop from './Components/Laptop/Laptop';

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
            path:"/Phone",
            element:<Phone/>
          },
          {
            path:"/Laptop",
            element:<Laptop/>
          },
        ]
        
      },
      {
        path:"/Statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/Dashboard",
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
