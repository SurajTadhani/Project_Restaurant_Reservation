import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Foods from './components/Foods'
import Dishes from './components/Dishes'
import Who_We_Are from './components/Who_We_Are'
import Team from './components/Team'
import Reservation from './components/Reservation'
import { Toaster } from 'react-hot-toast'
import Success from './components/Success'
import NotFound from './components/NotFound'


const router = createBrowserRouter([
  {
    path:'',
    element: <Layout />,
    children:[
      {
        path : '/',
        element :<HeroSection />
      },
      {
        path:'about',
        element :<About />
      },
      {
        path:'service',
        element :<Foods />
      },
      {
        path:'menu',
        element :<Dishes />
      },
      {
        path:'expertise',
        element :<Who_We_Are />
      },
      {
        path:'reservation',
        element :<Reservation />
      },
      {
        path:'success',
        element :<Success />
      },
      {
        path:'team',
        element :<Team />
      },
      {
        path:'*',
        element :<NotFound />
      },
      <Toaster />
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
   
  <div className=' bg-white'>
  <RouterProvider  router={router}/>
  </div>

   
  </React.StrictMode>,
)
