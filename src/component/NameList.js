import React from "react";

function NameList(props){
    const names=["suji","shanu"];
    return(
        <div >
            <h2>name List</h2>
            <ul>
                {names.map((names,index)=>{
                    return (<li key={index}>{names}</li>)
                })}
            </ul>
        </div>
    )
};

export default NameList;