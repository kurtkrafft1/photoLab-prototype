import React, { useState, useEffect } from "react"
import PhotographyMaster from "../../modules/PhotographyMaster";

const MyPhotoEditForm = props => {
    const [editedPhoto, setEditedPhoto] = useState({userId: "",title: "", url: "", description: "" })
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = {...editedPhoto}
        stateToChange[evt.target.id] = evt.target.value
        setEditedPhoto(stateToChange)
    }
    const updateExistingPhoto = evt => {
        evt.preventDefault()
        if(editedPhoto.userId==="" || editedPhoto.title==="" || editedPhoto.url==="" || editedPhoto.description===""){
            window.alert("Please fill out all the fields, or enter a space if intentional")
        }else {
            const updatedPhoto = {
                id: props.match.params.photoId,
                userId: editedPhoto.userId,
                title: editedPhoto.title,
                url: editedPhoto.url,
                description: editedPhoto.description
            }
            PhotographyMaster.putEditedPhoto(updatedPhoto).then(()=> {
                props.history.push('/myphotos')
            })
        }
    }
    useEffect(() => {
        PhotographyMaster.getOne(props.match.params.photoId).then(photo=> {
            setEditedPhoto(photo)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
               <div className="newForm">
            <form className="formAdd">
                <div>
            <label htmlFor="title">Title: </label>
                <input id="title" type="text"  onChange={handleFieldChange} value={editedPhoto.title}/>
               </div>
                <div className="desc-div">
                <label htmlFor="description" className="descriptionClass">Description: </label>
                <textarea cols="26" rows="4" id="description"onChange={handleFieldChange} value={editedPhoto.description}/>
                </div>
                <div>
                <label htmlFor="url">url: </label>
                <input id="url" type="text" onChange={handleFieldChange} value={editedPhoto.url}/>
                </div>
            </form>
            <div className="newPhoto">
                <picture className="updatePicBox">
                    <img className="newImg" src={editedPhoto.url} />
                </picture>
            </div>
            <button type="button" id="btn-submit"className = "ui secondary basic button" onClick={updateExistingPhoto}>Submit</button>
        </div>

        </>
    )
}
export default MyPhotoEditForm;