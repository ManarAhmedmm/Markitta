import React from 'react'
import "./ProductDetail.css";
import { TiShoppingCart } from 'react-icons/ti';
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

function ProductDetailLoading() {
  return (
    <div className='loading_item'>
       <div className='item_detail'>
          <div className="container">
      
      
              <div className="img_item loading_img_item">
           
              </div>
      
              <div className="details_item">
                    <h5 className='loading_text_item loading_img_item'></h5>
                    <h5 className='loading_text_item loading_img_item'></h5>
                    <h5 className='loading_text_item loading_img_item'></h5>
                    <h5 className='loading_text_item loading_img_item'></h5>
                    <h5 className='loading_text_item loading_img_item'></h5>
              </div>
              </div>
      
          </div>
          
    </div>
  )
}

export default ProductDetailLoading
