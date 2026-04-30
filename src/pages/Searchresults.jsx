import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../componants/PageTransition";
import Products from "../componants/slideProducts/Products";

function Searchresults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await response.json();

        setSearchResults(data.products || []);
        console.log("Search results:", data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <PageTransition key={query}>
      <div className="category_products">
        <div className="container">

          {loading && <p>Loading...</p>}

          {!loading && searchResults.length > 0 && (
            <>
              <div className="top_slide">
                <h2>Results for: {query}</h2>
              </div>

              <div className="products">
                {searchResults.map((item, index) => (
                  <Products product={item} key={index} />
                ))}
              </div>
            </>
          )}

          {!loading && searchResults.length === 0 && query && (
            <p>No results found</p>
          )}

        </div>
      </div>
    </PageTransition>
  );
}

export default Searchresults;