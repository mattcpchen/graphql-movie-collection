import React from 'react';



const DropdownFilter = ( {isActive, onChangeFilter, selectedValue} ) => {
  return(
    <select onChange={ onChangeFilter }
            value={ selectedValue }
            className={ (isActive)? "dropdown fetched-movies-dropdown is-active" : "dropdown fetched-movies-dropdown" }>
      <option value="none" hidden>Choose Category</option>
      <option value="all">All Movies</option>
      <option value="popular">Popular Movies</option>
      <option value="top_rated">Top Rated Movies</option>
      <option value="upcoming">Upcoming Movies</option>
    </select>
  );
};



export default DropdownFilter;