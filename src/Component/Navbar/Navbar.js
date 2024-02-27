import React from 'react'
import "./Nav.css";
import { FaSearch } from 'react-icons/fa';
export default function Navbar() {
  return (
    <div class='container'>

  <div id="navigation-bar">
    <nav>
      <ul>
        
        <li id='LOGO'>
              <FaSearch />
              <input type="search" placeholder="Search" aria-placeholder="Search" />
            </li>        
        <li><a href="#">Categories</a></li>
        <li><a href="#">Website Builders</a></li>
        <li><a href="#">Today's Datails</a></li>
        
      </ul>
    </nav>
    
  </div>
    </div>
  )
}
