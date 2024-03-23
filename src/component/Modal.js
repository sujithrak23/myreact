import React from "react";

function Modal(props){
    const{title,myview} = props.content;
    return(
        <div>
            <h2>Title : {title}</h2>
            <h2>MyView : {myview}</h2>
        </div>
    )
};
export default Modal;