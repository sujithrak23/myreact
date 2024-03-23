import React from "react";

function Movie(props){
    const{title,year,rating} = props.movie;
    return(
        <div>
            <b>
            <p>{title}</p>
            <p>{year}</p>
            <p>{rating}</p>
            </b>
        </div>
    ) 
};
Movie.defaultProps={
    reting:"not rated"
};
export default Movie;