import React, { useState, useEffect } from "react";
import PhotographyMaster from "../../modules/PhotographyMaster";
import "./MyPhotoForm.css"; 

const MyPhotoForm = props => {
    const [newPhoto, setNewPhoto] = useState({userId: "", title: "", description: "", url: ""})
    const [isLoading, setIsLoading] = useState(false)
    const activeUser = JSON.parse(sessionStorage.getItem('credentials'));

    const handleFieldChange = evt => {
        const stateToChange = {...newPhoto}
        stateToChange[evt.target.id] = evt.target.value
        setNewPhoto(stateToChange)
    }
    const postNewPhoto = evt => {
        evt.preventDefault()
        if(newPhoto.title===""||newPhoto.description===""||newPhoto.url===""){
            window.alert("Please fill out all the required fields.")
        } else{
            setIsLoading(true)
            const Photo = {
                userId: activeUser.id,
                title: newPhoto.title,
                description: newPhoto.description,
                url: newPhoto.url
            }
            console.log(Photo)  
            PhotographyMaster.addNewPhoto(Photo).then(()=> props.history.push('/myphotos'))
        }
     
    }
  return (
      <>
        <div className="newForm">
            <form className="formAdd">
                <div>
            <label htmlFor="title">Title: </label>
                <input id="title" type="text" placeholder="title..." onChange={handleFieldChange}/>
               </div>
                <div className="desc-div">
                <label htmlFor="description" className="descriptionClass">Description: </label>
                <textarea cols="26" rows="4" id="description" placeholder="description..." onChange={handleFieldChange}/>
                </div>
                <div>
                <label htmlFor="url">url: </label>
                <input id="url" type="text" placeholder="url..." onChange={handleFieldChange}/>
                </div>
            </form>
            <div className="newPhoto">
                <picture>
                    <img className="newImg" src={newPhoto.url} />
                </picture>
            </div>
            <button type="button" disabled={isLoading} id="btn-submit"className = "ui secondary basic button" onClick={postNewPhoto}>Submit</button>
        </div>

      </>
  )
}
export default MyPhotoForm;