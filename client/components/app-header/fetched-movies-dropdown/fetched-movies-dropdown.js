import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import DropdownFilter from './dropdown-filter';





let FetchedMoviesDropdown = ({category, clickToFetchMovies}) => {
  const handleSelectChange = (event) => {
    const clickValue = event.target.value;
    clickToFetchMovies(clickValue);
  };
  const categoryToValue = (category) => {
    const categoryMap = {
      'ALL_MOVIES': 'all',
      'POPULAR_MOVIES': 'popular',
      'TOP_RATED_MOVIES': 'top_rated',
      'UPCOMING_MOVIES': 'upcoming',
      'MY_MOVIES': 'none'
    };
    return categoryMap[category];
  };
  
  return(
    <DropdownFilter isActive = {category !== 'MY_MOVIES'}
                    onChangeFilter = {handleSelectChange}
                    selectedValue = {categoryToValue(category)}>
    </DropdownFilter>
  );
};


FetchedMoviesDropdown = connect(
  state => ({
    category: state.category
  }),
  dispatch => ({
    clickToFetchMovies: (value) => {
      const valToPathMap = {
        'all':'/all',
        'popular':'/popular',
        'top_rated':'/topRated',
        'upcoming':'/upcoming'
      };
      const path = valToPathMap[value];
  
      browserHistory.push(path);
    }
  })
)(FetchedMoviesDropdown);





export default FetchedMoviesDropdown;