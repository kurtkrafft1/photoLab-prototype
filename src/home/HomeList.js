import React, { useState, useEffect } from "react";
import HomeManager from "../modules/HomeManager";
import HomeCard from "./HomeCards";

const HomeList = (props) => {
  // const [backgroundImages, setBackgroundImage] = useState(1);

  // const changeState = () => {
  //   let newNumb = 2
  //   setBackgroundImage(newNumb)
  // }
  // const getBackgroundImage = () => {
  //   return HomeManager.getRandomBackgroundUrl().then(
  //     imageFromAPI => {
  //       setBackgroundImage(imageFromAPI);
  //     }
  //   );
  // };

  // useEffect(() => {
  //   // getBackgroundImage();
  //   changeState()
  // }, []);
  // const arr = [backgroundImages];
  if(props.hasUser) {
    return (
      <div className="home-container">
          <HomeCard {...props}/>
      </div>
    );
  } else {
  return (
    <div className="home-container">
        <HomeCard />
        <div className="button-container">
          <button type="button" className="ui inverted primary button" onClick={()=> props.history.push('/login')}>Sign in</button>
          <button type="button" className="ui inverted primary button" onClick={()=> props.history.push('/create')}>Create an Account</button>

        </div>
    </div>
  );
  }
};

export default HomeList;
