import React, { useEffect, useState } from 'react';
import { IoMdMenu, IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";
import "./header.css";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" }
];

function Buttomheader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsCategoryOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCategories(data);
        } else if (data.categories) {
          setCategories(data.categories);
        }
      })
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={closeMobileMenu}
      />

      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        
     
        <div className="sidebar-header">
          <h3>Menu</h3>
          <div className="sidebar-close" onClick={closeMobileMenu}>
            <IoMdClose />
          </div>
        </div>

       
        <div className="sidebar-nav">
          {navLinks.map((navLink, index) => (
            <Link
              key={index}
              to={navLink.link}
              className={location.pathname === navLink.link ? "active" : ""}
              onClick={closeMobileMenu}
            >
              {navLink.title}
            </Link>
          ))}
        </div>

       
        <div className="sidebar-categories">
          <h4>Categories</h4>
          {categories.map((category, index) => {
            const catName = typeof category === 'string' ? category : (category.slug || category.name);
            const catDisplay = catName ? catName.replace(/-/g, ' ') : category;
            return (
              <Link
                key={index}
                to={`/category/${catName}`}
                onClick={closeMobileMenu}
              >
                {catDisplay}
              </Link>
            );
          })}
        </div>

       
        <div className="sidebar-auth">
          <Link to="/login" className="login-btn" onClick={closeMobileMenu}>
            <PiSignInBold /> Login
          </Link>
          <Link to="/register" className="register-btn" onClick={closeMobileMenu}>
            <FaUserPlus /> Register
          </Link>
        </div>
      </div>

     
      <div className='btn_header'>
        <div className="container">
          <nav className='nav'>

         
            <div className="category_nav">
              <div className="category_btn" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                <IoMdMenu />
                <p>Browse Category</p>
                <IoMdArrowDropdown />
              </div>

              <div className={`category_nav_list ${isCategoryOpen ? "active" : ''}`}>
                {categories.map((category, index) => {
                  const catName = typeof category === 'string' ? category : (category.slug || category.name);
                  const catDisplay = catName ? catName.replace(/-/g, ' ') : category;
                  return (
                    <Link
                      key={index}
                      to={`/category/${catName}`}
                      onClick={() => setIsCategoryOpen(false)}
                    >
                      {catDisplay}
                    </Link>
                  );
                })}
              </div>
            </div>

           
            <ul className="nav_links">
              {navLinks.map((navLink, index) => (
                <li
                  key={index}
                  className={location.pathname === navLink.link ? "active" : ""}
                >
                  <Link to={navLink.link}>
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>

   
            <div className="burger-menu" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </div>

          </nav>

          <div className="sign_regs_icon">
            <Link to="/login" title="Login"><PiSignInBold /></Link>
            <Link to="/register" title="Register"><FaUserPlus /></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttomheader;