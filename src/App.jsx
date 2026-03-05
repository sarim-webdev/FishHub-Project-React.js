import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./Context/CartContext"

import MainLayout from "./Layouts/MainLayout"
import AuthLayout from "./Layouts/AuthLayout"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import FAQS from "./Pages/FAQS"
import Reviews from "./Pages/Reviews"
import Contact from "./Pages/Contact"

import Login from "./Pages/Auth/Login"
import Signup from "./Pages/Auth/Signup"
import "./App.css"

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/faqs" element={<FAQS />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App