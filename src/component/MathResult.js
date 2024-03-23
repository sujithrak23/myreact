import React from "react";
 function MathResult(){
    let x=75,y=90;
    const add = x*y;
    return (
        <div>
            <h2> multiply two numbers</h2>
            <h3>{add}</h3>
        </div>
    )
 };
 export default MathResult;