import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-left">
                <h1>40% Off</h1>
                <h3>Offers For You</h3>
                {/* <p>ONLY ON BEST SELLERS PRODUCTS</p> */}
                <button>Explore Now</button>
              </div>
              <div className="banner-right">
                <img src={exclusive_image} alt="" />
              </div>
      
    </div>
  )
}

export default Banner
