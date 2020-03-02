import React, { useState, useEffect } from "react";
//import the components we will need
import PhotoCard from "./MyPhotoCard";
import PhotographyMaster from "../../modules/PhotographyMaster";


const MyPhotoList = props => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = () => {
    PhotographyMaster.getAll().then(photosFromAPI => {
      console.log(photosFromAPI);
      setPhotos(photosFromAPI);
    });
  };
  const deleteCard = id => {
    PhotographyMaster.delete(id).then(() =>
      PhotographyMaster.getAll().then(setPhotos)
    );
  };
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="home-container">
      <div id="cards-container">
      <div className="button-container">
      <i id="icons"className=" big arrow alternate circle left icon" onClick={()=> props.history.push("/")}></i>
<i id="icons"className=" big plus square outline icon" onClick={()=> props.history.push("myphotos/new")}></i>

</div>
        {photos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} deleteCard={deleteCard} {...props} />
        ))}
      </div>
      
    </div>
  );
};
export default MyPhotoList;
