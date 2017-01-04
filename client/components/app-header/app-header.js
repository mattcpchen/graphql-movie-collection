import React from 'react';
import { Link } from 'react-router';
import FetchedMoviesDropdown from './fetched-movies-dropdown/fetched-movies-dropdown';
import MyCollectionButton from './my-collection-button/my-collection-button';


const AppHeader = () => {
  return(
    <div className="app-header">
      <div className="app-header-container">
        <div className="container-left">
          <Link to="/"><div className="header-logo"></div></Link>
          <div className="header-title">GraphQL Movie Collection</div>
        </div>
        <div className="container-right">
          <FetchedMoviesDropdown></FetchedMoviesDropdown>
          <MyCollectionButton></MyCollectionButton>
        </div>
      </div>
    </div>
  );
};


export default AppHeader;


