import React from "react";

function Todaydate(){
    const today = new Date();
    const date={
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    };
    const format =today.toLocaleDateString(undefined,date);
    return(
        <div>
            <p><i> <del>today's date</del> = {format}</i></p>
        </div>        )

};

export default Todaydate;