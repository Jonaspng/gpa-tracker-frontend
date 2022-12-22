import React from "react";
import Grades from "./grades";
import Credits from "./credits";

function GpaForm(props){
    return(
        <div>
            <hr></hr>        
            <h4>Semester {props.semester}</h4>
            <div className="row">
                <div className="col-lg-6">
                    <p className="gpa-grades">Module 1 Grade:</p>
                    <Grades gradeName={props.gradeName}/>
                    <p/>
                    <p className="gpa-credits">Module 1 Credits:</p>
                    <Credits creditName={props.creditName}/>
                </div>
                <div className="col-lg-6">
                    <p className="gpa-grades">Module 2 Grade:</p>
                    <Grades  gradeName={props.gradeName}/>
                    <p/>
                    <p className="gpa-credits">Module 2 Credits:</p>
                    <Credits creditName={props.creditName}/>
                </div>           
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <p className="gpa-grades">Module 3 Grade:</p>
                    <Grades gradeName={props.gradeName}/>
                    <p/>
                    <p className="gpa-credits">Module 3 Credits:</p>
                    <Credits creditName={props.creditName}/>
                </div>
                <div className="col-lg-6">
                    <p className="gpa-grades">Module 4 Grade:</p>
                    <Grades gradeName={props.gradeName}/>
                    <p/>
                    <p className="gpa-credits">Module 4 Credits:</p>
                    <Credits creditName={props.creditName}/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <p className="gpa-grades">Module 5 Grade:</p>
                    <Grades gradeName={props.gradeName}/>
                    <p/>
                    <p className="gpa-credits">Module 5 Credits:</p>
                    <Credits creditName={props.creditName}/>
                </div>
                <div className="col-lg-6">
                    <p className="gpa-grades">Module 6 Grade:</p>
                    <Grades gradeName={props.gradeName}/>
                    <p/>
                    <p className="gpa-credits">Module 6 Credits:</p>
                    <Credits creditName={props.creditName}/>
                </div>           
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <p className="gpa-grades">Module 7 Grade:</p>
                    <Grades gradeName={props.gradeName}/>
                    <p/>
                    <p className="gpa-credits">Module 7 Credits:</p>
                    <Credits creditName={props.creditName}/>
                </div>
                <div className="col-lg-6">
                    <p className="gpa-grades">Module 8 Grade:</p>
                    <Grades gradeName={props.gradeName}/>
                    <p/>
                    <p className="gpa-credits">Module 8 Credits:</p>
                    <Credits creditName={props.creditName}/>
                </div>           
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <p className="gpa-grades">Module 9 Grade:</p>
                    <Grades gradeName={props.gradeName} />
                    <p/>
                    <p className="gpa-credits">Module 9 Credits:</p>
                    <Credits creditName={props.creditName}/>
                </div>
                <div className="col-lg-6">
                    <p className="gpa-grades">Module 10 Grade:</p>
                    <Grades gradeName={props.gradeName}/>
                    <p/>
                    <p className="gpa-credits">Module 10 Credits:</p>
                    <Credits creditName={props.creditName}/>
                </div>           
            </div>
        </div>

    );
}

export default GpaForm;