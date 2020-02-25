import React, { useState, useEffect } from 'react';
//import the components we will need
import PhotoCard from './MyPhotoCard';
import PhotographyMaster from '../../modules/PhotographyMaster';

const MyPhotoList = () => {
    const [photos, setPhotos] = useState([])

     const getPhotos=()=> {
        PhotographyMaster.getAll().then(photosFromAPI=> {
            console.log(photosFromAPI)
            setPhotos(photosFromAPI)
        })
    }
    useEffect(()=> {
        getPhotos();
    }, [])

    return (
        <div id="cards-container">
            {photos.map(photo=> 
                <PhotoCard key={photo.id} photo={photo} />
            )}
        </div>
    )
}
export default MyPhotoList;
