/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Collections from "./pages/Collections";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";

import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="collections" element={<Collections />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
