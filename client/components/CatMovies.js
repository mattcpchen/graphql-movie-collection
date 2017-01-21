import React, { Component } from 'react';
import { connect } from 'react-redux';
import gqlHandlers from '../common/gqlHandlers';
import actions from '../actions/appActions';
import MovieListings from './movie-listings/movie-listings';






class CatMovies extends Component {
  _fetchCatMovies() {
    const pathToCatMap = {
      '/popular': { value:'popular', type:'POPULAR_MOVIES' },
      '/topRated': { value:'top_rated', type:'TOP_RATED_MOVIES' },
      '/upcoming': { value:'upcoming', type:'UPCOMING_MOVIES' }
    };
  
    const catValue = pathToCatMap[this.props.pathname].value;
    const catType = pathToCatMap[this.props.pathname].type;
    
    gqlHandlers.searchMoviesByCategory(catValue, (status, movies) => {
      if(status === 200) {
        this.props.dispatch( actions.showFetchedMovies('SHOW_'+catType, movies) );
      }
    });
  };
  
  
  
  componentDidMount() {
    if(this.props.isLoaded) {
      this._fetchCatMovies();
    }
  };
  
  componentDidUpdate() {
    this._fetchCatMovies();
  };
  
  render() {
    return(
      <MovieListings moviesType="categoryMovies"></MovieListings>
    );
  };
}



CatMovies = connect(
  state => ({
    isLoaded: state.isLoaded,
    pathname: state.routing.locationBeforeTransitions.pathname
  }),
  dispatch => ({ dispatch }),
)(CatMovies);



export default CatMovies;