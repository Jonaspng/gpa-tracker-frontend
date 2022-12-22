import React, {useState}from "react";
import google from "./icons8-google-48.png"


function Auth(props){

    const [name,setName]=useState("");

    function getName(event){
        setName(event.target.value)
    }

    return(
            <div className="card login-card">
                <form action={props.route} method="POST">
                    <div className="card-body">
                        <h3 className="card-title">{props.greetings} {name}</h3>
                        <a className="btn btn-light" href="https://gpa-tracker2021-api.herokuapp.com/auth/google"><img className="google-icon"src={google} alt="google-icon"/>{props.google}</a>
                        <hr/>
                        <h5>Or</h5>
                        <hr/>
                        <div className={props.name}>
                            <input value={name} onChange={getName} name="name" type="text" className="form-control" id="floatingInput" placeholder="Username" autoComplete="off" />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating">
                            <input name="username" type="email" className="form-control" id="floatingInput" placeholder=" " autoComplete="off"/>
                            <label hmtlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label hmtlFor="floatingPassword">Password</label>
                        </div>
                        <button className="btn btn-primary" type="submit" name="button">{props.btn}</button>
                    </div>
                </form>
            </div>
    );
}

export default Auth;