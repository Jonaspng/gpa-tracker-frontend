import React from "react";

function Credits(props){
    return(
        <select name={props.creditName} className="gpa-credits form-select mx-auto" aria-label="Default select example">
            <option defaultValue={0} value={0}>Null</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
        </select>
    );
}

export default Credits;
