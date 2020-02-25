import React from "react";

const Navbar = () => {
    const query =  window.location.href.split('3000/')
    console.log(query)
    if(query[1]===""){
        return(
            <header>
                <h1><em>Welcome To PhotoLab</em></h1>
            </header>
        )
    } else if (query[1] ==="myphotos"){
        return(
            <header>
                <h1><em>My Photos</em></h1>
            </header>
        )
    }
     else if (query[1] ==="friendsphotos"){
        return(
            <header>
                <h1><em>Friends Photos</em></h1>
            </header>
        )
    }
     else if (query[1] ==="settings"){
        return(
            <header>
                <h1><em>Settings</em></h1>
            </header>
        )
    }
  
}
export default Navbar;