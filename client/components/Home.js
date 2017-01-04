import React, { Component } from 'react';
import { connect } from 'react-redux';
import commonHandlers from '../common/commonHandlers';
import storageHandlers from '../common/storageHandlers';
import gqlHandlers from '../common/graphqlHandlers';
import actions from '../actions/appActions';
import AppHeader from './app-header/app-header';




class Home extends Component {
  componentDidMount() {
    const curYearWeek = commonHandlers.getYearWeek();
    const myMovieIds = storageHandlers.retriveMyCollection();
    gqlHandlers.initAllMovies(curYearWeek, myMovieIds, (status, myMovieCollection) => {
      if(status === 200) {
        const finalMovieIds = myMovieCollection.map(movie => movie.id);
        storageHandlers.updateMyCollection(finalMovieIds);
  
        this.props.dispatch( actions.updateCollectionCount(myMovieCollection.length) );
        this.props.dispatch( actions.updateAppLoadedState() );
      }
    });
  }
  
  render() {
    return (
      <div className="graphql-movie-collection">
        <AppHeader></AppHeader>
        { this.props.children }
      </div>
    );
  }
};

Home = connect(
  null,
  dispatch => ({dispatch})
)(Home);





export default Home;