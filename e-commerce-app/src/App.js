
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/mens_banner1.jpg'
import women_banner from './components/assets/womens_banner.jpg'
import kids_banner from './components/assets/mens_banner1.jpg'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
         <Route pathe="/mens" element={<ShopCategory banner={men_banner} category="men"/>} /> 
         <Route path="/womens" element={<ShopCategory banner={women_banner} category="womens"/>}/>
         <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids"/>}/>
         <Route path="/product" element={<Product/>}/>
         <Route path=":productId" element={<Product/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/login" element={<LoginSignUp/>}/>
         </Routes>
         <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
