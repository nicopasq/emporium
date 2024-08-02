import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css';
import NavBar from './features/Navbar';
import { Route, Routes } from 'react-router';
import Home from './features/home/Home';
import Shop from './features/shop/Shop';
import About from './features/about/About';
import Contact from './features/contact/Contact';
import Cart from './features/cart/Cart';
import { setProducts } from './slices/backendSlice';
import product_images from './images/images';
import ProductDetails from './features/shop/ProductDetails';
import Login from './features/login/Login';
import Signup from './features/signup/Signup';

function App() {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   fetch('/products')
  //   .then(r => r.json())
  //   .then(data => {
  //     data.map(product => {
  //       return product_images.map(image => {
  //         if (image.includes(product.image_path)){
  //           product.image = image
  //           return product
  //         }
  //         return null
  //       })
  //     })
  //     dispatch(setProducts(data))
  //   })
  // }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shop/:type/:id' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign_up' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
