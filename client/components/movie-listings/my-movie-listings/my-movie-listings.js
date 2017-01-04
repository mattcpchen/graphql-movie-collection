import React from 'react';
import MyMovieListing from './my-movie-listing';



const MyMovieListings = ({movies, toggleAddedState}) => {
  return(
    <div className="my-movie-listings">
      {movies.map(movie =>
        <MyMovieListing
          key={movie.id}
          image={movie.image_url}
          title={movie.title}
          overview={movie.overview}
          category={movie.category}
          popularity={movie.popularity}
          rating={movie.vote_average}
          releaseDate={movie.release_date}
          toggleAddedState={ ()=>toggleAddedState(movie, true, 'doRemove')}
          addedState={movie.added}
        ></MyMovieListing>)}
    </div>
  );
};


export default MyMovieListings;