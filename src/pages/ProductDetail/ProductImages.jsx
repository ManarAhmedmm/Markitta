import React from 'react'
function ProductImages({product}) {
  return (
              <div className="img_item">
              <div className="big_img">
                      <img id='big_img' src={product.images[0]} alt={product.title} /> 
              </div>
              <div className="sm_img">
      {product.images.map((img, index) => (
        <div key={index} className="img_div_sm">
              <img  src={img} alt={`${product.title} ${index+1}`} onClick={()=>{
      
           document.getElementById('big_img').src = img
      
          }} />
      
        </div>)
      )}
              </div>
              </div>
  
  )
}

export default ProductImages
