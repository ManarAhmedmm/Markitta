import React, { useEffect , useState } from "react";
import Heroslider from "../../componants/Heroslider";
import './Home.css'
import Slideproduct from "../../componants/slideProducts/Slideproduct";
import SlideProductLoading from "../../componants/slideProducts/SlideProductLoading";
import PageTransition from "../../componants/PageTransition";

const categories = [
 "smartphones", 
  "mobile-accessories", 
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories", 
    ]
function Home() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await Promise.all(
        categories.map(async (category) => {
          const response = await fetch(`https://dummyjson.com/products/category/${category}`);
          const data = await response.json();
          return ({ [category]: data.products });
        })
      );
      const productData = Object.assign({}, ...result);
      setProducts(productData);

      console.log(productData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

  return (
   <PageTransition>
     <div>
      <Heroslider />

      {loading ? (
        categories.map((category) => (
          <SlideProductLoading key={category} />
        ))
      ) : (
       categories.map((category) => (
        <Slideproduct key={category} data={products[category]} title={category.replace(/-/g, ' ')} />
      ))
      )}
     
    </div>
  
   </PageTransition>
  
  );
}
export default Home;
