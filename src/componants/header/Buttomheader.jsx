import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessorise", link: "/accessorise" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" }
];

function Buttomheader() {
  const location= useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen , setIsCategoryOpen] = useState(false)
  useEffect(()=>{
    setIsCategoryOpen(false)
  }, [location])
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);
 console.log(isCategoryOpen)
  return (
    <div className='btn_header'>
      <div className="container">

        <nav className='nav'>

          <div className="category_nav">

            <div className="category_btn" onClick={()=>{setIsCategoryOpen(!isCategoryOpen)}}>
              <IoMdMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>

            <div className={`category_nav_list ${isCategoryOpen ? "active" : ''}`}>
           {categories.map((category, index) => (
          <Link key={index} to={`/category/${category.slug}`}>
  {category.name}
</Link>
         ))}
        </div>

          </div>

        <div className="nav_links">
  {navLinks.map((navLink, index) => (
    <li 
      key={index}
      className={location.pathname === navLink.link ? "active" : ""}
    >
      <Link to={navLink.link}>{navLink.title}</Link>
    </li>
  ))}
</div>

        </nav>

        <div className="sign_regs_icon">
          <Link to="/login"><PiSignInBold /></Link>
          <Link to="/register"><FaUserPlus /></Link>
        </div>

      </div>
    </div>
  )
}

export default Buttomheader;