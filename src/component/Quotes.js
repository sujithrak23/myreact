import React from "react";

function Quotes(){
    const val = [
        "Quote 1","Quote 2","Quote 3"
    ];
    const index = Math.floor(Math.random()*val.length);
    const random=val[index];
    return(
        <div>
            <h2>RANDOM QUOTE</h2>
            <p> {random} </p>
        </div>
    )
};

export default Quotes;