import movieHelpers from './helpers/movieHelpers';

let lastFetchedYearWeek = '';
let allFetchedMovies = [];
let allFetchedMoviesSorted = [];
let myMovieCollection = [];



const initAllMovies = (curYearWeek, myMovieIds) => new Promise(resolve => {
  // make sure all movies are updated weekly
  if(curYearWeek !== lastFetchedYearWeek) {
    allFetchedMovies = [];
  }
  
  initStep_01_fetchedMovies();
  
  function initStep_01_fetchedMovies() {
    if(allFetchedMovies.length === 0) {
      let categories = ['popular', 'top_rated', 'upcoming'];
      movieHelpers.fetchAllMovies(categories, [], (_movies, _yearWeek) => {
        lastFetchedYearWeek = _yearWeek;
        initStep_02_fetchedMoviesSorted(myMovieIds, _movies);
      });
    } else {
      initStep_02_fetchedMoviesSorted(myMovieIds, allFetchedMovies);
    }
  }
  
  function initStep_02_fetchedMoviesSorted(_myMovieIds, _allFetchedMovies){
    allFetchedMovies = movieHelpers.updateAllFetchedMovies(_myMovieIds, _allFetchedMovies);
    allFetchedMoviesSorted = movieHelpers.sortMoviesByTitle(allFetchedMovies);
    initStep_03_myMovieCollection(_myMovieIds, allFetchedMovies);
  }
  
  function initStep_03_myMovieCollection(_myMovieIds, _allFetchedMovies) {
    const allMovieIds = _allFetchedMovies.map(movie => movie.id);
    movieHelpers.updateMyMovieCollection(_myMovieIds, _allFetchedMovies, allMovieIds, [], (movies) => {
      myMovieCollection = movies;
      initStep_final();
    });
  }
  
  function initStep_final() {
    resolve(myMovieCollection);
  }
});


const searchMoviesByCategory = (category) => new Promise(resolve => {
  if(category === 'all') {
    resolve(allFetchedMoviesSorted);
  } else {
    const filteredMovies = allFetchedMovies
      .filter(movie => {
        const categories = movie.category.split(' | ');
        return categories.indexOf(category) > -1;
      });
    resolve(filteredMovies);
  }
});



const addToCollection = (id) => new Promise(resolve => {
  const movies = allFetchedMovies.filter(movie => movie.id===id);
  
  // check if error: more or none
  if(movies.length !==1) {
    resolve(null);
  }
  
  // allFetchedMovies
  allFetchedMovies = movieHelpers.toggleAddedStatus(allFetchedMovies, id, true);
  allFetchedMoviesSorted = movieHelpers.sortMoviesByTitle(allFetchedMovies);
  // myMovieCollection
  myMovieCollection.unshift(movies[0]);
  resolve(myMovieCollection);
});


const removeFromCollection = (id) => new Promise(resolve => {
  const removedMovies = myMovieCollection.filter(movie => movie.id === id);
  
  // check if error: none
  if(removedMovies.length ===0) {
    resolve(null);
  }
  
  // allFetchedMovies
  allFetchedMovies = movieHelpers.toggleAddedStatus(allFetchedMovies, id, false);
  allFetchedMoviesSorted = movieHelpers.sortMoviesByTitle(allFetchedMovies);
  // myMovieCollection
  myMovieCollection = myMovieCollection.filter(movie => movie.id !==id);
  resolve(myMovieCollection);
});

const displayMyCollection = () => new Promise(resolve => {
  resolve(myMovieCollection);
});



module.exports = {
  initAllMovies,
  searchMoviesByCategory,
  addToCollection,
  removeFromCollection,
  displayMyCollection
};
