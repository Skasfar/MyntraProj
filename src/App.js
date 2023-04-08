import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CartPage from "./main/CartPage";
import Navbar from "./main/Navbar";
import ProductPage from "./main/ProductPage";
import Search from "./main/Search";

import { UserContext, UserIncFun, Cart } from "./main/userContext";
function App() {
  let [cart, setCart] = useState([]);
  let [i, setI] = useState(0);
  let [total,setTotal]=useState(0);

  function inc(cartContent) {
    setI(i + 1);
    let ar = cart;
    ar.push(cartContent);
    setCart(ar);
    localStorage.setItem("cartItems", JSON.stringify(cart))
    var x=parseFloat(cartContent.price);
    x=Math.ceil(x*70);
    setTotal(x+total);
    console.log(total);

    localStorage.setItem("cartTotal", JSON.stringify(total))
  }

  useEffect(() => {

  }, [i])
  console.log(i);
  return (
    <UserContext.Provider value={i} >
      <UserIncFun.Provider value={inc}>
        <Cart.Provider value={cart}>
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/product/:index" element={<ProductPage />} > </Route>
                <Route path="/cart" element={<CartPage />} > </Route>
              </Routes>
            </BrowserRouter>

          </div>
        </Cart.Provider>
      </UserIncFun.Provider>
    </UserContext.Provider>
  );
}

export default App;
