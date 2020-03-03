import React, { useState, useEffect} from "react";
import FriendsPhotoCard from "./FriendsPhotoCard";
import PhotographyMaster from "../../modules/PhotographyMaster";
import FriendsManager from "../../modules/FriendManager";
import { CONNREFUSED } from "dns";

const FriendsPhotoList = props => {
    const [friends, setFriends] = useState([])
    const [friendsPhotos, setFriendsPhotos] = useState([])
    const user=JSON.parse(sessionStorage.getItem("credentials"))

    const getFriends= () => {
      
        FriendsManager.getFriends(user.id).then(friendsFromAPi=> {
            // console.log(friendsFromAPi)
            setFriends(friendsFromAPi)
            // const friendsPhotoArray=[];
            friendsFromAPi.map(friend=> {
                
                // console.log("friends", friend)
               PhotographyMaster.getAllById(friend.friendUserId).then(photos=> {
                   const arr = friendsPhotos
                    photos.forEach(photo=> {
                        arr.push(photo)
                    })
                   console.log(arr)
                   const newArr = arr.filter(obj=> obj!==undefined)
                   console.log(newArr)
                   setFriendsPhotos(newArr)
                   
        
               })
               
            })

        })
        
    }

    // const getPhotos=() => {
      
         
    //          setFriendsPhotos(friendPhotosArray);
       
         
    // }
    useEffect(()=> {
        getFriends()

    }, [])

    return (
        <div className="home-container">
          <div id="cards-container">
          <div className="button-container">
          <i id="icons"className=" big arrow alternate circle left icon" onClick={()=> props.history.push("/")}></i>
    {/* <i id="icons"className=" big plus square outline icon" onClick={()=> props.history.push("friendsphotos/new")}></i> */}
    
    </div>
            {friendsPhotos.map(friendsPhoto => (
           
              <FriendsPhotoCard key={friendsPhoto.id} photo={friendsPhoto} {...props}  />
            
            ))}
          </div>
          
        </div>
      );
}
export default FriendsPhotoList;