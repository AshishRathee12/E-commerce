import React, { Suspense, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './Root';
import AddCart from './Components/Cart/AddCart';
// import Productlist from './Components/Productlist/Productlist';
const Productlist = React.lazy(() => import("./Components/Productlist/Productlist"))

const App = createBrowserRouter(
  createRoutesFromElements(
    // <Suspense fallback={<>loading data here</>}>
    <Route path='/' element={<Root />}    >
      <Route path='' element={<Home />} />
      <Route path='/product-list/:id' element={<Productlist />} ></Route>
      <Route path='/Cart' element={<AddCart />}></Route>
      {/* <Route path='blogs' element={<Blogs />}></Route> */}
      {/* <Route path='*' element={<Error />}></Route> */}
    </Route >
    // {/* </Suspense> */}
  )
)







export default App
