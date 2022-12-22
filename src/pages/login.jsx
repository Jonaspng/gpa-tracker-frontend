import React from "react";
import Navbar from "../components/navbar.jsx"
import Auth from "../components/auth.jsx"



function Login(){
    
    return(
        <div className="login">
            <Navbar
                brand="/"
                item1="Home"
                link1="/"
                item2="Login"
                link2="/login"
                item3="Register"
                link3="/register"
            />
            
            <Auth
                route="https://gpa-tracker2021-api.herokuapp.com/login"
                title="Login"
                btn="Login"
                name="hidden"
                greetings="Welcome Back"
                google="Login With Google"
            />
       </div>
    );
}

export default Login;