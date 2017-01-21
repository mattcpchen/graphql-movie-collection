import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import gqlHandlers from '../common/gqlHandlers';
import actions from '../actions/appActions';
import MovieListings from './movie-listings/movie-listings';




class MyCollection extends Component {
  _fetchMyMovies() {
    gqlHandlers.displayMyCollection((status, movies) => {
      if(status === 200) {
        this.props.dispatch( actions.showMyMovies('SHOW_MY_MOVIES', movies) );
        if(movies.length === 0) {
          browserHistory.push('/all');
        }
      }
    });
  };
  
  
  
  componentDidMount() {
    if(this.props.isLoaded) {
      this._fetchMyMovies();
    }
  };
  
  componentDidUpdate() {
    this._fetchMyMovies();
  };
  
  render() {
    return(
      <MovieListings moviesType="myCollection"></MovieListings>
    );
  }
}
MyCollection = connect(
  state => ({ isLoaded: state.isLoaded }),
  dispatch => ({ dispatch }),
)(MyCollection);


export default MyCollection;