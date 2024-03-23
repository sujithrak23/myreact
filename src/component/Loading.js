import React from "react";

function Statement(){
    return <h1>Conditional rendering in React works the same way 
        conditions work in JavaScript. Use JavaScript operators like 
        if or the conditional operator to create elements representing 
        the current state,and let React update the UI to match them.</h1>;
};
function Waiting(){
    return <h1>Loading....</h1>;
};
 function Loading(props){
        const isLoading = props.isLoading;
        if((isLoading)){
            return <Waiting />;
        }
        return <Statement />;
    
    };

export default Loading;