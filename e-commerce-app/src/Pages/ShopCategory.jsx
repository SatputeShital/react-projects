import React ,{useContext}from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Items/Items'

const ShopCategory = (props) => {
 const {all_product}=useContext(ShopContext);



  return (
    <div className='shop-category'>
      <img src={props.banner} alt=""  style={{width:"500px", height:"300px"}}/>
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing 1-12
          </span>Out of 35 products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, i)=>{
          if(props.category===item.category){
              return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
