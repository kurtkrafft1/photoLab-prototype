import React from 'react';

const HomeCard = props => {
    const backgroundStyle = {
        background: `url(${props.image.url})  no-repeat center center fixed`
    }
    console.log(props)
return <div className="home-screen" id="home-screen" style={backgroundStyle}>

<h1>PhotoLab</h1>
<h3>A website for photo storage and organization</h3>
</div>
}

export default HomeCard;