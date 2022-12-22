import React from "react";

function Grades(props){
    return(
        <select name={props.gradeName} className="gpa-grades form-select mx-auto" aria-label="Default select example">
            <option defaultValue={0} value={0}>Null</option>
            <option value={5}>A+</option>
            <option value={5}>A</option>
            <option value={4.5}>A-</option>
            <option value={4}>B+</option>
            <option value={3.5}>B</option>
            <option value={3}>B-</option>x
            <option value={2.5}>C+</option>
            <option value={2}>C</option>
            <option value={1.5}>D+</option>
            <option value={1}>D</option>
            <option value={0}>F</option>
                
        </select>
    );
}

export default Grades;