import React, { useState, useEffect} from "react";
import PhotographyMaster from "../../modules/PhotographyMaster";
import "./PhotoDetail.css";

const PhotoDetails = props => {
    const [photo, setPhoto] = useState({title: "", description:"", url:""})
    const [isLoading, setIsLoading] = useState(false)

    const handleDelete = () => {
        setIsLoading(true)
        PhotographyMaster.delete(props.photoId).then(()=> props.history.push("/myphotos"))
    }
    useEffect(()=> {
        
        PhotographyMaster.getOne(props.photoId).then(photo=> {
            console.log(photo)
            setPhoto({
                title: photo.name,
                description: photo.description,
                url:photo.url
            })
            
        })
    
        setIsLoading(false)
    }, [props.photoId])

    if(photo.description===undefined){
        return (
            <div className='card'>
            <div className = "card-content">
              <h1>Sorry page not found</h1>
              <picture>
                <img src="https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif"  className="card-photo"/>
    
              </picture>
            </div>
          </div>
        )
    }else {
        return (
            <>
            <div className="newRoot">
                <div className="button-container">
                <i id="icons"className=" big arrow alternate circle left icon" onClick={()=> props.history.push("/myphotos")}></i>
                <i id="icons"class="big edit outline icon" onClick={()=> props.history.push(`/myphotos/${props.photoId}/edit`)}></i>
                </div>
            <div className="Viewcard">
                <div className="Viewcard-content">
                    <picture className="dets-pic">
                        <img src={photo.url} alt="photo" className="card-photo"/>
                    </picture>
        <h2><em>{photo.title}</em></h2>
        <h6>{photo.description}</h6>
        <div className="icons">
                <i className="trash alternate outline icon" disabled ={isLoading} onClick={handleDelete}></i>
                <i className="comment alternate outline icon"></i>
                </div>
            </div>
                </div>
               
            </div>
            </>
        )
    }

}
export default PhotoDetails