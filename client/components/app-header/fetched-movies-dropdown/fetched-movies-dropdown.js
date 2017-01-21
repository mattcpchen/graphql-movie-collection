import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import DropdownFilter from './dropdown-filter';





let FetchedMoviesDropdown = ({pathname, clickToFetchMovies}) => {
  const handleSelectChange = (event) => {
    const value = event.target.value;
    const valueToPathMap = {
      'all': '/all',
      'popular': '/popular',
      'top_rated': '/topRated',
      'upcoming': '/upcoming'
    };
    clickToFetchMovies(valueToPathMap[value]);
  };
  const pathnameToValue = (_pathname) => {
    const pathToValueMap = {
      '/': 'none',
      '/all': 'all',
      '/popular': 'popular',
      '/topRated': 'top_rated',
      '/upcoming': 'upcoming',
      '/collection': 'none'
    };
    return pathToValueMap[_pathname];
  };
  
  return(
    <DropdownFilter isActive = {pathnameToValue(pathname) !== 'none'}
                    onChangeFilter = {(event)=>handleSelectChange(event)}
                    selectedValue = {pathnameToValue(pathname)}>
    </DropdownFilter>
  );
};


FetchedMoviesDropdown = connect(
  state => ({
    pathname: state.routing.locationBeforeTransitions.pathname
  }),
  dispatch => ({
    clickToFetchMovies: (pathname) => {
      browserHistory.push(pathname);
    }
  })
)(FetchedMoviesDropdown);





export default FetchedMoviesDropdown;