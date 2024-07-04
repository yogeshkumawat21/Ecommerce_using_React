import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './Component/Home/Home.jsx'
import Men from './Component/Men/Men.jsx'
import Layout  from './Component/Layout/Layout.jsx'
import Women from './Component/Women/Women.jsx';
import Shop from './Component/Shop/Shop.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Login from './Component/Login/Login.jsx'
import Cart from './Component/Cart/Cart.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='Men' element={<Men />} />
      <Route path='Women' element={<Women />} />
      <Route path='Shop' element={<Shop/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Cart'  element={<Cart/>}/>
     
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
