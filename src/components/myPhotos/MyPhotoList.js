import React, { useState, useEffect } from "react";
//import the components we will need
import PhotoCard from "./MyPhotoCard";
import PhotographyMaster from "../../modules/PhotographyMaster";
import ModalMaker from "../modal/ModalMaker";

const MyPhotoList = () => {
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
        {photos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} deleteCard={deleteCard} />
        ))}
      </div>
      <div className="button-container">
      <button type="button" onClick={() => ModalMaker()}>
        Say Hi
      </button>
      </div>
    </div>
  );
};
export default MyPhotoList;
