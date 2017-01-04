import React from 'react';
import { connect } from 'react-redux';
import ButtonFilter from './button-filter';





let MyCollectionButton = ({category, displayMessage}) => {
  return (
    <ButtonFilter isActive={category === 'MY_MOVIES'}
    >My Collection: { displayMessage }</ButtonFilter>
  );
};

MyCollectionButton = connect(
  state => {
    const category = state.category;
    const movies = state.movies;
    
    const displayMessage = (()=>{
      const myMoviesCount = state.collectionCount;
      
      if(category === 'MY_MOVIES') {
        return myMoviesCount.toString();
      }
      
      const thisMoviesCount = movies
        .filter(movie => movie.added=== true)
        .length;
      
      return '(' +thisMoviesCount +'/'+ myMoviesCount +')'
    })();
    
    return { category, displayMessage }
  }
)(MyCollectionButton);



export default MyCollectionButton;