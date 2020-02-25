const remoteURL = "https://source.unsplash.com/collection/452289/1000x1000"

export default {
    getRandomBackgroundUrl(){ 
        return fetch(`${remoteURL}`)
    }
    
}