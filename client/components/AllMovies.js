import React, { Component } from 'react';
import { connect } from 'react-redux';
import gqlHandlers from '../common/gqlHandlers';
import actions from '../actions/appActions';
import MovieListings from './movie-listings/movie-listings';






class AllMovies extends Component {
  _fetchAllMovies() {
    this.props.dispatch(actions.selectCategory('ALL_MOVIES'));
    gqlHandlers.searchMoviesByCategory('all', (status, movies) => {
      if(status === 200) {
        this.props.dispatch( actions.showFetchedMovies('SHOW_ALL_MOVIES', movies) );
      }
    });
  }
  
  
  componentDidMount() {
    if(this.props.isLoaded) {
      this._fetchAllMovies();
    }
  };
  
  componentDidUpdate() {
    this._fetchAllMovies();
  };
  
  render() {
    return(
      <MovieListings moviesType="allMovies"></MovieListings>
    );
  }
}



AllMovies = connect(
  state => ({ isLoaded: state.isLoaded }),
  dispatch => ({ dispatch }),
)(AllMovies);



export default AllMovies;