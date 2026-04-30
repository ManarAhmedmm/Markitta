// import React from 'react'
// import './slideProduct.css'
// function SlideProductLoading() {
//   return (
//     <div className='loading_slide'>
//       <div className='slide_producte slide'>
//         <div className="container">
//             <div className="top_slide">
//                 <h2 className='loading_img_item'></h2>
//                 <p className='loading_img_item'></p>
//             </div>
//                  <div className="products_loading">
//                        <div className="product">
//                           <div className="img_product .loading_img_item"></div>
//                           <div className="content .loading_img_item"></div>
//                        </div>
//                        <div className="product">
//                           <div className="img_product .loading_img_item"></div>
//                           <div className="content .loading_img_item"></div>
//                        </div>
//                        <div className="product">
//                           <div className="img_product .loading_img_item"></div>
//                           <div className="content .loading_img_item"></div>
//                        </div>
//                  </div>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default SlideProductLoading

import React from "react";
import "./slideProduct.css";

function SlideProductLoading() {
  return (

    <div className="loading_slide">
      <div className="slide_product slide">
        <div className="container">
          <div className="top_slide">
    <h2 className="loading_img_item"></h2>
    <p className="loading_img_item"></p>
    <div className="line"></div>
</div>

          <div className="products_loading">
            {[1, 2, 3].map((i) => (
              <div className="product" key={i}>
                <div className="img_product loading_img_item"></div>
                <div className="content loading_img_item"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideProductLoading;