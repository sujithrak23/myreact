import React from "react";


 function UserProfile(props){
    const {named,age,job}  = props.data;
    return(
        <div>
            <p>{named}</p>
            <p>{age}</p>
            <p>{job}</p>
        </div>
    )
 };

 export default UserProfile;