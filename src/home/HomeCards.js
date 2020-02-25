import React from 'react';

const HomeCard = props => {
    console.log(props)
return <div className="home-screen" id="home-screen" background={`${props.image.url}`}>

<h1>PhotoLab</h1>
<h3>A website for photo storage and organization</h3>
</div>
}

export default HomeCard;