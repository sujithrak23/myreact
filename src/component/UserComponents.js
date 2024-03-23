import React from "react";

import { UserAge,UserName } from './UserComponents';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserName />
    <br></br>
    <UserAge />
  </React.StrictMode>
);




