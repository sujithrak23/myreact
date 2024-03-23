import React from "react";

function Button(props){
    const{button}=props;
    return(
        <div>
            <button>{button}</button>
        </div>
    )
};

export default Button;