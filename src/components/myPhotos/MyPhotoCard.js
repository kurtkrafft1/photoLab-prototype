import React from "react";

const PhotoCard = props => {
    return(
        <div className = "card">
            <div className="card-content">
                <picture>
                    <img src={`${props.photo.url}`} alt="My Photo" className="my-photo"/>
                </picture>
                <h3><span className="title-name">{props.photo.title}</span></h3>
                <button type="button" onClick={()=> props.deleteCard(props.photo.id)}><i class="trash alternate outline icon"></i></button>
            </div>
        </div>
    )
}
export default PhotoCard;