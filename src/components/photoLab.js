import React from "react";
import Sidebar from "./sidebar/Sidebar";
import "../App.css";
import ApplicationViews from "./ApplicationViews";
import Navbar from "./nav/NavBar"
import "./photoLab.css";

const PhotoLab = () => {
    return (
        <>
        <Sidebar />
        <Navbar />
        <ApplicationViews />
        </>
    )
}

export default PhotoLab;