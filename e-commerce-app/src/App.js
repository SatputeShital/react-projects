
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import LoginSignUp from './Pages/LoginSignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
         <Route pathe="/mens" element={<ShopCategory category="men"/>} /> 
         <Route path="/womens" element={<ShopCategory category="womens"/>}/>
         <Route path="/kids" element={<ShopCategory category="kids"/>}/>
         <Route path="/product" element={<Product/>}/>
         <Route path=":productId" element={<Product/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/login" element={<LoginSignUp/>}/>
         </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
