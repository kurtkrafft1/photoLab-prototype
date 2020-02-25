import React, { useState, useEffect } from "react";
import HomeManager from "../modules/HomeManager";
import HomeCard from "./HomeCards";

const HomeList = () => {
  const [backgroundImages, setBackgroundImage] = useState([]);

  const getBackgroundImage = () => {
    return HomeManager.getRandomBackgroundUrl("452289/1000x1000").then(
      imageFromAPI => {
        console.log(imageFromAPI);
        setBackgroundImage(imageFromAPI);
      }
    );
  };
  useEffect(() => {
    getBackgroundImage();
  }, []);
  const arr = [backgroundImages];
  return (
    <div className="home-container">
      {arr.map(image => (
        <HomeCard key="1" image={image} />
      ))}
    </div>
  );
};

export default HomeList;
