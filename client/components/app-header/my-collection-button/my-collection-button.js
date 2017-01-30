import React from 'react';
import { connect } from 'react-redux';
import ButtonFilter from './button-filter';





let MyCollectionButton = ({pathname, displayMessage}) => {
  return (
    <ButtonFilter isActive={pathname === '/collection'}
    >My Collection: { displayMessage }</ButtonFilter>
  );
};

MyCollectionButton = connect(
  state => {
    const pathname = state.routing.locationBeforeTransitions.pathname;
    const movies = state.movies;
    
    const displayMessage = (()=>{
      const myMoviesCount = state.collectionCount;
      
      if(pathname === '/collection') {
        return myMoviesCount.toString();
      }
      
      const thisMoviesCount = movies
        .filter(movie => movie.added=== true)
        .length;
      
      return '(' +thisMoviesCount +'/'+ myMoviesCount +')'
    })();
    
    return { pathname, displayMessage }
  }
)(MyCollectionButton);



export default MyCollectionButton;