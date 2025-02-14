import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo.png'
import instagram_icon from '../assets/instagram_icon.webp'
import pinterest_icon from '../assets/pinterest_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import facebook_icon from '../assets/facebook_icon.webp'
import x_icon from '../assets/X_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p> StyleSphere</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={facebook_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={x_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025- All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer;
