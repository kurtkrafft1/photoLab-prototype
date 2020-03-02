const remoteUrl = "http://localhost:5002/"

export default {
    getOne(id){
        return fetch(`${remoteUrl}myPhotos/${id}`).then(r=>r.json())
    },
    getAll() {
        return fetch(`${remoteUrl}myPhotos`).then(r=>r.json())
    },
    delete(id){
        return fetch(`${remoteUrl}myPhotos/${id}`, {
            method: "DELETE"
        }).then(r=>r.json())
    },
    addNewPhoto(newPhoto) {
        return fetch (`${remoteUrl}myPhotos`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newPhoto)
        }).then(r=>r.json)
    },
    putEditedPhoto(editedPhoto) {
        return fetch (`${remoteUrl}myphotos/${editedPhoto.id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(editedPhoto)
        }).then(r=>r.json())
    }
}