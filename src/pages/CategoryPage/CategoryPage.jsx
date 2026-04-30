import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../componants/slideProducts/Products'
import './CategoryPage.css'
import PageTransition from '../../componants/PageTransition'
function CategoryPage() {
  const { category } = useParams()
  const [categoryProducts, setCategoryProducts] = useState([])

 useEffect(() => {
  console.log("CATEGORY:", category);

  fetch(`https://dummyjson.com/products/category/${category}`)
    .then(res => res.json())
    .then(data => {
      console.log("DATA:", data);
      setCategoryProducts(data.products);
    });
}, [category]);

  return (
   <PageTransition>
     <div className="category_products">
      <div className="container">
        <div className="top_slide">
                <h2>{category}</h2>
                <p>Check out our new arrivals of the season</p>
            </div>
           
        <div className="products">
          {categoryProducts?.map((item, index) => (
            <Products product={item} key={index} />
          ))}
        </div>
      </div>
    </div>
   </PageTransition>
  )
}

export default CategoryPage