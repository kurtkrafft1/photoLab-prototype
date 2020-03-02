import { Route, Redirect } from "react-router-dom";
import React from "react";
import HomeList from "../home/HomeList";
import MyPhotoList from "./myPhotos/MyPhotoList";
import MyPhotoForm from "./myPhotos/MyPhotoForm";
import MyPhotoEditForm from "./myPhotos/MyPhotoEditForm";
import PhotoDetails from "./myPhotos/PhotoDetails";
import ScottCard from "./m_scott/ScottCard";
import Login from "./auth/Login";


const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
    return (
      <React.Fragment>
           <Route 
      path="/login"
     component = {Login}
      />
        <Route
          exact
          path="/"
          render={props => {
            if(isAuthenticated()){
              return <HomeList />;
            } else {
              return <Redirect to="/login" />
            }
           
          }}
        />
        <Route
          exact path="/myphotos"
          render={props => {
            if(isAuthenticated()){
            return <MyPhotoList {...props}/>;}
            else {
              return <Redirect to ="/login"/>
            }
          }}
        />
        <Route
          exact path="/myphotos/new"
          render={props => {
            if(isAuthenticated()){
            return <MyPhotoForm {...props}/>;}
            else {
              return <Redirect to ="/login"/>
            }
          }}
        />
        <Route 
        exact path="/myphotos/:photoId(\d+)/edit"
        render={props => {
          if(isAuthenticated()){
            return <MyPhotoEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
        <Route 
        exact path="/myphotos/:photoId(\d+)/"
        render={props => {
          if(isAuthenticated()){
            return <PhotoDetails  photoId={parseInt(props.match.params.photoId)} {...props}/>}
            else{
              return <Redirect to="/login" />
            }
          }
        }
        />
        <Route 
        path="/scottqoute"
        render={props=> {
          if(isAuthenticated()){
          return <ScottCard />;}
          else{
            return <Redirect to="/login" />
          }
        }}
        />
        {/* <Route
        path="/friendsphotos"
        render={props=> {
          if(isAuthenticated()){
            return <FriendsPhotoList />;}
          //   UPPERCASE THIS L WHEN READY
          else{
            return <Redirect to="/login" />
          }
        }}
        />
        <Route 
        path="/settings"
        render={props => {
            return <Settings />;
        }}
        /> */}
      </React.Fragment>
    );
  };
  
  export default ApplicationViews;