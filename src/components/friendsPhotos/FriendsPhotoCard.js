import React from "react";

const FriendsPhotoCard = props => {
    return(
        <div className = "card">
            <div className="card-content">
                <picture>
                    <img src={`${props.photo.url}`} alt="My Photo" className="my-photo" onClick={()=> props.history.push(`/myphotos/${props.photo.id}`)}/>
    <p className="light-text">by: {props.photo.user.username}</p>
                </picture>
                <h3><span className="title-name">{props.photo.title} </span></h3>
                {/* <i id="icons"className="eye icon" onClick={()=> props.history.push(`/friendsphotos/${props.photo.id}`)}></i> */}
            </div>
        </div>
    )
}
export default FriendsPhotoCard;