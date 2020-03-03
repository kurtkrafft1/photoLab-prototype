import React, { useState, useEffect } from "react" ;
import UserManager from "../../modules/UserManager";

const CreateCardForm = (props) => {
    const [user, setUser] = useState({username:"", email: "", password: "",confirmedPassword:"", profPic:"" })
    const [credentials, setCredentials] = useState({username:"", email: "", password: "", profPic:"" });
    const [isLoading, setIsLoading] = useState({})

    const handleFieldChange = evt => {
        const stateToChange = {...user}
        stateToChange[evt.target.id] = evt.target.value
        setUser(stateToChange)
    }
    const postNewAccount = evt => {
        evt.preventDefault()
        console.log(user)
        if(user.username===""|| user.password===""||user.email===""){
            window.alert("Please fill out all the required fields")
        }else if (user.password !== user.confirmedPassword){
            window.alert("The Passwords entered do not match")
        }else {
            if(user.profPic===""){
                const newUser = {
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    confirmedPassword: user.confirmedPassword,
                    profPic: "https://vectorified.com/images/no-profile-picture-icon-14.png"
                }
                UserManager.postNewProfile(newUser).then(()=> {
                    setCredentials(newUser)
                    setIsLoading(true)
                    props.setUser(newUser)
                    props.history.push('/')})
            } else {
                const newUser = {
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    confirmedPassword: user.confirmedPassword,
                    profPic: user.profPic
                }
                UserManager.postNewProfile(newUser).then(()=> {
                    setIsLoading(true)
                    setCredentials(newUser)
                    props.setUser(newUser)
                    props.history.push('/')

                })
            }
           
        }
    }
    const handleLogin = (e) => {
        e.preventDefault();
        /*
            For now, just store the email and password that
            the customer enters into session storage.
            ...Let's just trust the user... That's a good idea, right????
        */
       props.setUser(credentials)
     
      }
    return (
        <>
         <form className="login-form" >
      <fieldset className="sign-in-form">
        <h3>Create Account</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="username"
            id="username"
            placeholder="Username address"
            required="" autoFocus="" />
          <label htmlFor="inputUsername">Username</label>
          <input onChange={handleFieldChange} type="email"
            id="email"
            placeholder="Email address"
            required="" autoFocus="" />
          <label htmlFor="inputEmail">Email address</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required=""
            type="password" />
          <label htmlFor="inputPassword">Password</label>
          <input onChange={handleFieldChange} type="confirmPassword"
            id="confirmedPassword"
            placeholder="Confirm Password"
            required="" 
            type="password"/>
          <label htmlFor="inputconfirmPassword">Confirm Password</label>
          <input onChange={handleFieldChange} type="profPic"
            id="profPic"
            placeholder="Profile Pic"
            required="" />
          <label htmlFor="inputprofPic">Profile Pic</label>
         
        </div>
        <picture className="center-pic">
              <img src={user.profPic} className="create-pic" />
          </picture>
        <div className="button-container">
        <button type="submit" className="ui inverted primary button" onClick={postNewAccount}>Sign up!</button>
        </div>
      </fieldset>
    </form>
        </>
    )
}
export default CreateCardForm;