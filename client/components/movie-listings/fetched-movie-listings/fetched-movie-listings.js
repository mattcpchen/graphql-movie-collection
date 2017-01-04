import React from 'react';
import FetchedMovieListing from './fetched-movie-listing';



const FetchedMovieListings = ({movies, toggleAddedState}) => {
  return(
    <div className="fetched-movie-listings">
      {movies.map(movie =>
        <FetchedMovieListing
          key={movie.id}
          title={movie.title}
          thumb={movie.thumb_url}
          additionMovieInfo = {
            (() => {
              let message='';
              if(!!movie.category) {
                message = 'Category: ' +movie.category;
              } else if(!!movie.popularity) {
                message = 'Popularity: '+movie.popularity;
              } else if(!!movie.vote_average) {
                message = 'Average Rate: '+movie.vote_average;
              } else if(!!movie.release_date) {
                message = 'Release Date: '+movie.release_date;
              }
              return message;
            })()
          }
          toggleAddedState={ ()=>toggleAddedState(movie, false)}
          addedState={movie.added}
        ></FetchedMovieListing>)}
    </div>
  );
};



export default FetchedMovieListings;


