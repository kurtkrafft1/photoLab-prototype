import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import "../App.css";
import ApplicationViews from "./ApplicationViews";
import Navbar from "./nav/NavBar"
import "./photoLab.css";

const PhotoLab = () => {
    const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

    const [hasUser, setHasUser] = useState(isAuthenticated());
  
    const setUser = user => {
      sessionStorage.setItem("credentials", JSON.stringify(user));
      setHasUser(isAuthenticated());
    } 
    return (
        <>
        <Sidebar hasUser={hasUser}/>
        <Navbar hasUser={hasUser} />
        <ApplicationViews  hasUser={hasUser} setUser={setUser}/>
        </>
    )
}

export default PhotoLab;