import React, { Suspense, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
// import Home from './Components/Home/Home'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './Root';
import AddCart from './Components/Cart/AddCart';
// import Productdetail from './Components/ProductDetail/Productdetail';
import Notfound from './Components/DataNotFound/Notfound';
// import Productlist from './Components/Productlist/Productlist';
const Productlist = React.lazy(() => import("./Components/Productlist/Productlist"))
const ProductDetail = React.lazy(() => import("./Components/ProductDetail/Productdetail"))
const Home = React.lazy(() => import("./Components/Home/Home"))

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='/' element={
        <Suspense fallback={<>Loading...</>}>
          <Home />
        </Suspense>
      } />
      <Route path='/product-list/:id' element={
        <Suspense fallback={<>Loading...</>}>
          <Productlist />
        </Suspense>
      } />
      <Route path='/Cart' element={<AddCart />} />
      <Route path='/Notfound' element={<Notfound />} />
      <Route path='/Productdetail/:id' element={
        <Suspense fallback={<>Loading...</>}>
          <ProductDetail />
        </Suspense>
      } />
    </Route>

  )
)







export default App
