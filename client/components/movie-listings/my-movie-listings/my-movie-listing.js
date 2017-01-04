import React from 'react';



const MyMovieListing = ({ toggleAddedState, image, title, category, popularity, rating, overview, releaseDate, addedState }) => {
  if(addedState) {
    return(<div></div>);
  }
  return(
    <div className="movie-listing">
      <div className="movie-listing-left">
        <img src={image}></img>
      </div>
      <div className="movie-listing-right">
        <div className="listing-item title">
          <span className="item-header">Title: </span>
          <span className="item-content">{title}</span></div>
        <div className="listing-item category">
          <span className="item-header">Category: </span>
          <span className="item-content">{category}</span></div>
        <div className="listing-item rating">
          <span className="item-header">Rating: </span>
          <span className="item-content">{rating}</span></div>
        <div className="listing-item date">
          <span className="item-header">Date: </span>
          <span className="item-content">{releaseDate}</span></div>
        <div className="listing-item overview">
          <span className="item-header">Overview: </span>
          <span className="item-content">{overview}</span></div>
        <div className="add-remove-btn" onClick={toggleAddedState}>-</div>
      </div>
    </div>
  );
};



export default MyMovieListing;