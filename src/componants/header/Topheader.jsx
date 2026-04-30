import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css" 
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import Searchbox from './Searchbox';
function Topheader() {
  const { cartItems , favoriteItems } = useContext(CartContext);
  return (
    <div className='top_header'>
    <div className="container">
      <Link className='logo' to="/"> <img src={Logo} alt="logo" style={{ width: '100px', height: '60px' }} /> </Link>
      <Searchbox /> 
        <div className="header_icons">
        <div className="icon">
          <Link to="/favorites"><FaRegHeart /></Link>
         <span className='count'>{favoriteItems.length}</span>
        </div>
         <div className="icon">
         <Link to="/cart"><TiShoppingCart /></Link>
         <span className='count'>{cartItems.length}</span>
        </div>
    </div>  
        </div>
    </div>
  )
}

export default Topheader
