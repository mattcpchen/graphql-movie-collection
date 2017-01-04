import httpHelpers from './httpHelpers';


const fetchAllMovies = (categories, allMovies, callback) => {
  if(categories.length === 0) {
    const thisYearWeek = _getYearWeek();
    allMovies = _filterRepeatedMovies(allMovies);
    callback(allMovies, thisYearWeek);
    return;
  }
  
  const category = categories.shift();
  httpHelpers.fetchMoviesByCategory(category, movies => {
    allMovies = allMovies.concat(movies);
    fetchAllMovies(categories, allMovies, callback);
  });
};

const updateAllFetchedMovies = (myMovieIds, movies) => {
  return movies.map(movie => {
    return {
      ...movie,
      added: (myMovieIds.indexOf(movie.id) > -1)? true : false
    }
  })
};

const updateMyMovieCollection = (myMovieIds, movies, movieIds, myMovieCollections, callback) => {
  if(myMovieIds.length === 0) {
    callback(myMovieCollections);
    return;
  }
  
  const myMovieId = myMovieIds.shift();
  _fetchMovieByMovieId(myMovieId, movies, movieIds, (movie)=>{
    if(movie !== null) {
      myMovieCollections.push(movie);
    }
    updateMyMovieCollection(myMovieIds, movies, movieIds, myMovieCollections, callback);
  });
};


const sortMoviesByTitle = (movies) => {
  // note: need to apply slice() cause sort is not immutable function
  return movies
    .slice()
    .sort((a,b) =>{
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      if (aTitle > bTitle) {return 1;}
      if (aTitle < bTitle) {return -1;}
      return 0;
    });
};


const toggleAddedStatus = (movies, movieId, state) => {
  return movies.map(movie => {
    if(movie.id === movieId) {
      return {
        ...movie,
        added: state
      };
    }
    return movie;
  });
};


module.exports = {
  fetchAllMovies,
  updateAllFetchedMovies,
  updateMyMovieCollection,
  sortMoviesByTitle,
  toggleAddedStatus
};







const _getYearWeek = () => {
  let d = new Date();
  d.setHours(0,0,0,0);
  d.setDate(d.getDate() + 4 - (d.getDay()||7));
  const yearStart = new Date(d.getFullYear(),0,1);
  const weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  
  return d.getFullYear()+'_'+weekNo;
};

const _filterRepeatedMovies = (allMovies) => {
  let allMovieIds = [];
  allMovies.forEach((movie,index, arr) => {
    if(allMovieIds.indexOf(movie.id) === -1) {
      allMovieIds.push(movie.id);
    } else {
      const thisCat = movie.category;
      if( arr[allMovieIds.indexOf(movie.id)].category.indexOf(thisCat) === -1) {
        arr[allMovieIds.indexOf(movie.id)].category += ' | '+thisCat;
      }
      arr[index] = null;
    }
  });
  
  return allMovies.filter(movie => movie!==null);
};


const _fetchMovieByMovieId = (myMovieId, movies, movieIds, callback) => {
  if(movieIds.indexOf(myMovieId) > -1) {
    const movie = movies[movieIds.indexOf(myMovieId)];
    callback(movie);
  } else {
    httpHelpers.fetchMovieByMovieId(myMovieId, movie => {
      callback(movie);
    });
  }
};

