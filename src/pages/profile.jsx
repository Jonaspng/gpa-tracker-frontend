import React, { useState } from "react";
import Navbar2 from "../components/navbar2.jsx"
import GpaForm from "../components/GpaForm.jsx"

let changedSemester=false;
let semesters=[];
let buttonAppear=false;


function Profile(){

    const [semester,setSemester]=useState("0");
    

    function getSemester(event){
        setSemester(event.target.value);
        changedSemester=true;
    }

    function createArray(){
        semesters=[];
        for(let i=1;i<=semester;i++){
            semesters.push(i)
        }
        if (semester==="0"){
            buttonAppear=false;

        }else{
            buttonAppear=true;
        }   
        
    }
 
    function getGpaForm(x){
        return(
            <GpaForm key={x} semester={x} gradeName={"semesterGrade"+x} creditName={"semesterCredit"+x}/>
        );
    }        


    return(
        <div>
            
            <Navbar2
                brand="/"
                item1="Home"
                link1="/"
                item2="Dashboard"
                link2="/dashboard"
            />
            <div className="profile-content">
                <h4>Please Fill up the form below</h4>
                <form action="https://gpa-tracker2021-api.herokuapp.com/profile" method="POST">
                    <p className="form-qn">How many semesters did you complete?</p>
                        <select name="semesters"onChange={getSemester} className="form-select mx-auto" aria-label="Default select example">
                            <option defaultValue="0" value="0">Please Click Here</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        {changedSemester===true? createArray():null}
                        {changedSemester===true? semesters.map(getGpaForm):null}
                        {buttonAppear===true? <button className="btn btn-primary" type="submit">Submit</button>:null}
                </form>
            </div>
            
        </div>
       
    );
}

export default Profile;