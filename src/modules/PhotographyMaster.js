const remoteUrl = "http://localhost:5002/"

export default {
    getOne(id){
        return fetch(`${remoteUrl}myPhotos/${id}`).then(r=>r.json())
    },
    getAll() {
        return fetch(`${remoteUrl}myPhotos`).then(r=>r.json())
    }
}