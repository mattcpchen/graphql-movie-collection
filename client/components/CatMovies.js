import React, { Component } from 'react';
import { connect } from 'react-redux';
import gqlHandlers from '../common/graphqlHandlers';
import actions from '../actions/appActions';
import MovieListings from './movie-listings/movie-listings';






class CatMovies extends Component {
  _fetchCatMovies() {
    const pathName = this.props.location.pathname;
    const pathToCatMap = {
      '/popular': { value:'popular', type:'POPULAR_MOVIES' },
      '/topRated': { value:'top_rated', type:'TOP_RATED_MOVIES' },
      '/upcoming': { value:'upcoming', type:'UPCOMING_MOVIES' }
    };
  
    const catValue = pathToCatMap[pathName].value;
    const catType = pathToCatMap[pathName].type;
  
    this.props.dispatch(actions.selectCategory(catType));
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
  state => ({ isLoaded: state.isLoaded }),
  dispatch => ({ dispatch }),
)(CatMovies);



export default CatMovies;