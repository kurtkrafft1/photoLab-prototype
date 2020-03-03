const remoteUrl = "http://localhost:5002/"

export default {
    postNewProfile(profile) {
        return fetch(`${remoteUrl}users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(profile)

        }).then(r=>r.json())
    },
    checkProfile(credentials) {
        return fetch(`${remoteUrl}users?email=${credentials.email}`).then(r=>r.json())
    }
}