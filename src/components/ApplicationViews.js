import { Route } from "react-router-dom";
import React from "react";
import HomeList from "../home/HomeList";
import MyPhotoList from "./myPhotos/MyPhotoList";

const ApplicationViews = () => {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <HomeList />;
          }}
        />
        <Route
          path="/myphotos"
          render={props => {
            return <MyPhotoList />;
          }}
        />
        {/* <Route
        path="/friendsphotos"
        render={props=> {
            return <FriendsPhotoList />;
          //   UPPERCASE THIS L WHEN READY
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