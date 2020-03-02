import React, { useState, useEffect } from "react";
import HomeManager from "../modules/HomeManager";
import HomeCard from "./HomeCards";

const HomeList = () => {
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
  return (
    <div className="home-container">
        <HomeCard />
    </div>
  );
};

export default HomeList;
