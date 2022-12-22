import React from "react";
import Navbar from "../components/navbar.jsx"

function Home(){
    return(
        <div>
            <Navbar 
                brand="/"
                item1="Home"
                link1="/"
                item2="Login"
                link2="/login"
                item3="Register"
                link3="/register"
            />
            <div className="home-content">
                <i className="fas fa-chart-line fa-10x"></i>
                <h1>Welcome to a GPA Tracker Web Application</h1>
                <a className="btn btn-dark normal-btn" href="/login">Login</a>
                <a className="btn btn-light normal-btn" href="/register">Register</a>
                <footer>
                    <p className="footer-para">Brought to you by Jonas Png</p>
                    <p className="footer-para">Icons are from <a href="https://icons8.com/">Icons8</a> and <a href="https://fontawesome.com/">Fontawesome</a></p>
                </footer>
            </div>
            
        </div>
       
    );
}

export default Home;