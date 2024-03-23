import React from "react";



function PrintAdult(){
    return <h1>Adult</h1>;
    <hr/>;

};
function PrintMinor(){
    return <h1>Minor</h1>;
    <hr/>;

};
 function AgeCheck(props){
        const age = props.age;
        if(!(age < 18)){
            return <PrintMinor />;
        }
        return <PrintAdult />;
    
    };
 


export default AgeCheck;