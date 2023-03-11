import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./main/Navbar";
import ProductPage from "./main/ProductPage";
import Search from "./main/Search";

function App() {

  return (
    <div>
      <Navbar/>
     <BrowserRouter>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
     <Route path="/product/:index" element={<ProductPage/>} > </Route>
     <Route path="/" element={<Navbar />} />
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
