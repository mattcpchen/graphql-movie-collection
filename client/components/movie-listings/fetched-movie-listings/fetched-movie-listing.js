import React from 'react';



const FetchedMovieListing = ({ toggleAddedState, title, thumb, additionMovieInfo, addedState }) => {
  return(
    <div className={ addedState? "movie-listing movie-listing-added":"movie-listing" }>
      <div className="image"><img src={thumb}></img></div>
      <div className="title">{title} </div>
      <div className="info">{additionMovieInfo}</div>
      <div className="add-remove-btn" onClick={toggleAddedState}>{addedState?'-' : '+'}</div>
    </div>
  );
};


export default FetchedMovieListing;