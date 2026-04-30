import React ,{useEffect, useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./header.css"
function Searchbox() {
    const [searchterm, setSearchterm] =useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(searchterm.trim()){
            navigate(`/search?query=${encodeURIComponent(searchterm.trim())}`);
        }       
         console.log(searchterm);
    }

    useEffect(() => {
        const fetchSuggestions = async () => {
          try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${searchterm}`);
            const data = await response.json();
            setSuggestions(data.products.slice(0, 5) || []);
          } catch (error) {
            console.error("Error fetching suggestions:", error);
            setSuggestions([]);
          }
        };

       const delayDebounceFn = setTimeout(() => {
          if (searchterm.trim()) {
            fetchSuggestions();
          } else {
            setSuggestions([]);
          }
        }, 300); // Delay of 300ms

        return () => clearTimeout(delayDebounceFn);
      }, [searchterm]);

  return (
    <div className='searchbox_container'>
       <form onSubmit={handlesubmit} className="search_box">
              <input onChange={(e)=>setSearchterm(e.target.value)} type="text" name='search' id='search' placeholder='Search For Product'/>
                <button type='submit'><FaSearch /></button>
            </form>
            {suggestions.length > 0 && (
        <ul className="suggestions_list">
          {suggestions.map((item) => (
            <li
  key={item.id}
  onClick={() => {
    setSearchterm(item.title);
    setSuggestions([]);
    navigate(`/search?query=${encodeURIComponent(item.title)}`);
  }}
>
    <img
    src={item.images?.[0]}
    alt={item.title}
    className="suggestion_img"
  />
  {item.title}
</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Searchbox
