import React from 'react';
import { Link } from 'react-router';


const ButtonFilter = ( {isActive, children} ) => {
  return(
    <Link to="/collection" className={ isActive? "button my-movies-btn is-active" : "button my-movies-btn" }
    >{children}</Link>
  );
};

export default ButtonFilter;