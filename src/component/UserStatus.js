import React from "react";


function StatementOnline(){
    return <h1>Online</h1>;
};
function StatementOffline(){
    return <h1>Offline</h1>;
};

function UserStatus(props){
    const isOnline = props.isOnline;
    if(!isOnline){
        return <StatementOnline />;
    }
    return <StatementOffline />;

};




export default UserStatus;