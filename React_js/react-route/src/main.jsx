import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Service from './Pages/Service.jsx'
import Contact from './Pages/Contact.jsx'
import User from './Pages/User.jsx'
import Github from './Pages/Github.jsx'
import { gitInfo } from './Pages/Github.jsx'


const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='service' element={<Service/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='user/:userid' element={<User/>}/>
          <Route 
          loader={gitInfo}
          path="github" 
          element={<Github/>}
          />
      </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
)
