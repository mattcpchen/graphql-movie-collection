import React from 'react';
import { connect } from 'react-redux';
import storageHandlers from '../../common/storageHandlers';
import gqlHandlers from '../../common/gqlHandlers';
import actions from '../../actions/appActions';
import FetchedMovieListings from './fetched-movie-listings/fetched-movie-listings'
import MyMovieListings from './my-movie-listings/my-movie-listings'






let MovieListings = ({moviesType, movies, toggleAddedState}) => {
  switch(moviesType) {
    case 'allMovies':
    case 'categoryMovies':
      return (
        <div className="movieListings">
          <FetchedMovieListings movies={movies} toggleAddedState={toggleAddedState} />
        </div>
      );
    
    case 'myCollection':
      return (
        <div className="movieListings">
          <MyMovieListings movies={movies} toggleAddedState={toggleAddedState} />
        </div>
      );
  }
};






MovieListings = connect(
  state => {
    const movies = state.movies;
    return { movies };
  },
  dispatch => ({
    toggleAddedState: (movie, isMyMovies, forceToAction=null) => {
      const nextAction = (() => {
        if(forceToAction) {
          return forceToAction;
        }
        return (movie.added) ? 'doRemove' : 'doAdd';
      })();
      
      if(nextAction === 'doAdd') {
        storageHandlers.addToCollection(movie.id);
        gqlHandlers.addToCollection(movie, (status, myMovies) => {
          if(status === 200) {
            dispatch( actions.increaseCollectionCount() );
            dispatch( actions.toggleAddedState(movie.id, isMyMovies, myMovies) );
          }
        });
      } else if(nextAction === 'doRemove') {
        storageHandlers.removeFromCollection(movie.id);
        gqlHandlers.removeFromCollection(movie, (status, myMovies) => {
          if(status === 200) {
            dispatch( actions.decreaseCollectionCount() );
            dispatch( actions.toggleAddedState(movie.id, isMyMovies, myMovies) );
          }
        });
      }
    }
  })
)(MovieListings);



export default MovieListings;