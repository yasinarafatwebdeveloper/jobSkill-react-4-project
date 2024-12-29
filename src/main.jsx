import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main/Main';
import Home from './Components/Home/Home/Home';
import About from './Components/Routes/About/About';
import Room from './Components/Routes/Room/Room';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,


    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/rooms",
        element:<Room></Room>
      }


      
    ],

  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='lg:container mx-auto w-full'>
   <RouterProvider router={router} />
   </div>
  </StrictMode>,
)
