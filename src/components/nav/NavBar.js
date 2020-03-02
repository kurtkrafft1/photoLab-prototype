import React from "react";
import withRouter, { Link, NavLink} from "react-router-dom"

const Navbar = () => {

        
 
        return(
            <header>
                <NavLink to="/">
                <h1>PH<i className="camera retro icon"></i>TOLAB</h1>
                </NavLink>
                <div className="navLinks">
                <NavLink className="navItem" to="/myphotos">My Photos</NavLink>
                <p className="bar">|</p>
                <NavLink className="navItem" to="/friendsphotos">Friends Photos</NavLink>
                <p className="bar">|</p>
                <NavLink className="navItem" to="/settings">Settings</NavLink>
                <p className="bar">|</p>
                <NavLink className="navItem" to="/login">Logout</NavLink>
           
                </div>
            </header>
        )
   
  
}
export default Navbar;