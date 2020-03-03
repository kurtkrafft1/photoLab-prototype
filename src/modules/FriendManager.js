const remoteUrl = "http://localhost:5002/"

export default {
    getFriends(id) {
        return fetch(`${remoteUrl}friends?userId=${id}`).then(r=>r.json())
    }
}