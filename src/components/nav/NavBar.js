import React from "react";
import withRouter, { NavLink} from "react-router-dom"

const Navbar = props => {

        
 if(props.hasUser){
     const user = JSON.parse(sessionStorage.getItem("credentials"))

    return(
        <header>
             <div className="userInfo">
                <p>{user.username}</p>
                <picture>
                    <img src={user.profPic} alt="you!" className="profPicIcon" />
                </picture>
            </div>
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