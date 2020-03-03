import React from "react";
import withRouter, { NavLink} from "react-router-dom"

const Navbar = props => {

        
 if(props.hasUser){
    //  console.log(props)
     const user = sessionStorage.getItem("credentials")
     console.log(user)
     console.log(user.username)
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
            <div className="userInfo">
                <p>{user.username}</p>
            </div>
        </header>
    )
 } else {
     return (
         <header>
        <NavLink to="/">
        <h1>PH<i className="camera retro icon"></i>TOLAB</h1>
        </NavLink>
        </header>
     );
 }

   
  
}
export default Navbar;