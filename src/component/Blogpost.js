import React from "react";

function Blogpost(){
   
        return(
            <div className="main-container" style={{backgroundColor:"skyblue"}}>
                <h1>My Blogpost</h1>
                <p>
                    Extracting components might seem like grunt work at first, 
                    but having a palette of reusable components pays off in larger apps. 
                    A good rule of thumb is that if a part of your UI is used several times 
                    (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), 
                    it is a good candidate to be extracted to a separate component.
                </p>
                <h2>By someone new</h2>
                <footer>here is the copyright information </footer>
                <hr/>
            </div>
        )
    

};
export default Blogpost;