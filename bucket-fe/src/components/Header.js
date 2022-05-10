import React from "react";
import logo from '../images/logo.svg'; // Tell webpack this JS file uses this image
import '../styles/Header.css'
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <header class="header-content">
        <div>
         <Link to="/"> <img class="logo-img" src={logo} alt="logo-plants-bucket"/></Link>
        </div>
        <nav>
          <ul class="nav-menu">
            <li>
              <a>Account</a>
              <ul>
                {/* <li><a>User</a></li>  */}
               <li><NavLink to="user-view">User</NavLink></li> 
                {/* se debe activa la vista del usuario */}
                <li><NavLink to="admin-view">Admin</NavLink></li> 
                {/* se debe cambiar Admin */}
              </ul>
            </li>
            <li>
            <NavLink to="cart">Cart</NavLink>
            </li>
          </ul>
        </nav>
      </header>
  
      
    </>
  );
}

export default Header;
