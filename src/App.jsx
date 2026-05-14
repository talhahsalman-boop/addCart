
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
     <ToastContainer position="top-right" autoClose={3000} />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>  
    </>
  );
}

export default App;
