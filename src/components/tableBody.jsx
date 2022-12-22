import React from "react";

function TableBody(props){
    return(
        <tr>
            <th scope="row">{props.semester}</th>
            <td>{props.GPA}</td>
        </tr>
    );
}

export default TableBody;