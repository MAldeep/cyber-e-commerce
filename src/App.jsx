import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import WishList from "./pages/WishList";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="w-full h-[100dvh]">
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<h1>login page</h1>} />
          <Route path="/register" element={<h1>register page</h1>} />
          <Route path="/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<h1>cart page</h1>} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/contact" element={<h1>contact page</h1>} />
          <Route path="/checkout" element={<h1>checkout page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
