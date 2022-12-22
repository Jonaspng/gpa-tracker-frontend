//jshint esversion: 6
import React,{useState, useEffect}from "react";
import Navbar2 from "../components/navbar2";
import TableBody from "../components/tableBody";
import GpaForm from "../components/GpaForm";

function Profile2(){
    let semesters=[];
    let confirmation;

    const [semester,setSemester] = useState("0");

    const [GPA, setGPA] = useState([]);

    const [add, setAdd] = useState(false);


    useEffect(() => {
        fetch("https://gpa-tracker-backend.up.railway.app/api/gpa", { withCredentials: true,credentials: 'include'})
          .then((res) => res.json())
          .then((GPA) => setGPA(GPA.GPA));
      }, []);

    useEffect(() => {
        fetch("https://gpa-tracker-backend.up.railway.app/api/profile", { withCredentials: true,credentials: 'include'})
          .then((res) => res.json())
          .then((semester) => setSemester(semester.userSemester));
      }, []);


    for(let i=1;i<=semester;i++){
        semesters.push(i);
    }
    var details=[];

    for(let i=1;i<=semester;i++){
        details.push({"semester":i,"GPA":GPA[i-1]});
    }
    
    function handleClick(){
        if (add===false){
            setAdd(true);
        }
        else{
            setAdd(false);
        }
        
    }

    function handleReset(event){
        if (!confirmation){
            event.preventDefault()
        }
    }



    function getRow(x){
        return(
        <TableBody key={x.semester} semester={x.semester} GPA={x.GPA}/>
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
            
            <div className="profile2">
            <h1 >My Profile</h1>
            <table className="table table-striped table-light me-auto ms-auto GPA-table">
                <thead>
                    <tr>
                        <th scope="col">Semester</th>
                        <th scope="col">GPA</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map(getRow)}
                </tbody>
            </table>
            <form onSubmit={handleReset} action="https://gpa-tracker-backend.up.railway.app/reset" method="POST">
                <a onClick={handleClick} className="btn btn-success normal-btn">Add New Semester</a>
                <button onClick={()=>{confirmation=window.confirm("Are you sure you want to reset all data?")}} type="submit" className="btn btn-danger normal-btn">Reset Profile</button>
            </form>
            <form action="https://gpa-tracker-backend.up.railway.app/profile2" method="POST">
                {add?<GpaForm gradeName={"semesterGrade"} creditName={"semesterCredit"} semester={parseInt(semester)+1}/>:null}
                {add?<button type="submit" className="btn btn-primary">Submit</button>:null}   
            </form>           

            </div>
            
        </div>
    );
}

export default Profile2;