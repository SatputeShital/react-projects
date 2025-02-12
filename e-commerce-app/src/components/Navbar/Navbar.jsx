import React,{useState} from 'react';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar =()=>
{
    const[menu, setMenu]=useState("shop");
    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                 <p>
                 StyleSphere
                 </p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}} >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>

            </ul>
            <div className="nav-login-cart">
            <Link to='/login'><button> Login</button></Link>
            <Link to='/cart'> <img src={cart} alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;