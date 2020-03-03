import { Route, Redirect } from "react-router-dom";
import React from "react";
import HomeList from "../home/HomeList";
import MyPhotoList from "./myPhotos/MyPhotoList";
import MyPhotoForm from "./myPhotos/MyPhotoForm";
import MyPhotoEditForm from "./myPhotos/MyPhotoEditForm";
import PhotoDetails from "./myPhotos/PhotoDetails";
import ScottCard from "./m_scott/ScottCard";
import Login from "./auth/Login";
import CreateCardForm from  "./create/CreateCardForm";


const ApplicationViews = (props) => {
  const setUser = props.setUser;
  const hasUser = props.hasUser
    return (
      <React.Fragment>
           <Route 
      path="/login"
      render={props=> {
        return <Login  setUser={setUser} {...props} />
      }}
      />
           <Route 
      path="/create"
      render={props=> {
        return <CreateCardForm {...props} setUser={setUser}/>
      }}
      />
        <Route
          exact
          path="/"
          render={props => {
              return <HomeList {...props} hasUser={hasUser}/>;
          
           
          }}
        />
        <Route
          exact path="/myphotos"
          render={props => {
            if(hasUser){
            return <MyPhotoList {...props}/>;}
            else {
              return <Redirect to ="/login"/>
            }
          }}
        />
        <Route
          exact path="/myphotos/new"
          render={props => {
            if(hasUser){
            return <MyPhotoForm {...props}/>;}
            else {
              return <Redirect to ="/login"/>
            }
          }}
        />
        <Route 
        exact path="/myphotos/:photoId(\d+)/edit"
        render={props => {
          if(hasUser){
            return <MyPhotoEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
        <Route 
        exact path="/myphotos/:photoId(\d+)/"
        render={props => {
          if(hasUser){
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
          if(hasUser){
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