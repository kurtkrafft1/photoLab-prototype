const remoteUrl = "https://michael-scott-quotes.herokuapp.com/quote"

export default {
    get(){
        return fetch(`${remoteUrl}`).then(r=>r.json())
    }
}