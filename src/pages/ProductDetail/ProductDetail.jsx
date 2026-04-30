import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetail.css";
import { FaCartArrowDown } from "react-icons/fa";
import Slideproduct from '../../componants/slideProducts/Slideproduct';
import ProductDetailLoading from './ProductDetailLoading';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import PageTransition from '../../componants/PageTransition';
function ProductDetail() {
const { id } = useParams()
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [relatedProducts, setRelatedProducts] = useState([]);
const [lodingRelated, setLoadingRelated] = useState(true);
   useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();

  }, [id]);

  useEffect(() => {
   if (!product) return
   fetch(`https://dummyjson.com/products/category/${product.category}`)
    .then(res => res.json())
    .then(data => setRelatedProducts(data.products.filter(p => p.id !== product.id).slice(0, 4)))
    .catch(err => console.error('Error fetching related products:', err))
    .finally(() => setLoadingRelated(false))
  }, [product?.category]);
  console.log(product);
  console.log(relatedProducts);
  if (loading) {
    return <div><ProductDetailLoading /></div>;
  }
  if(!product) {
    return <div>Product not found</div>;
  }
  return (
   <PageTransition key={id}>
     <div>

        <div className='item_detail'>
    <div className="container">

    <ProductImages product={product}/>
    <ProductInfo product={product}/>
    </div>
        </div>
    
        {lodingRelated ? <div>Loading related products...</div>:(<Slideproduct key={product.category} data={relatedProducts} title={product.category.replace('-',' ')}/> ) }
    </div>
   </PageTransition>
  )
}

export default ProductDetail
