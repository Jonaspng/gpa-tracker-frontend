import React from "react";
import Navbar from "../components/navbar.jsx"
import Auth from "../components/auth.jsx"



function Register(){
   

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
                route="https://gpa-tracker2021-api.herokuapp.com/register"
                title="Register"
                btn="Register"
                name="form-floating"
                greetings="Hello"
                google="Sign-up With Google"
            />
       </div>
    );
}

export default Register;