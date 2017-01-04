const appActions = {
  // loadedState
  updateAppLoadedState: () => ({
    type: 'APP_IS_LOADED'
  }),
  
  
  // category
  selectCategory: (category) => ({
    type: category
  }),
  
  
  // movies
  showFetchedMovies: (type, movies) => ({
    type: type,
    movies: movies
  }),
  showMyMovies: (type, movies) => ({
    type: type,
    movies: movies
  }),
  toggleAddedState: (movieId, isMyMovies, myMovies) => ({
    type: 'TOGGLE_ADDED_STATE',
    id: movieId,
    isMyMovies: isMyMovies,
    myMovies: myMovies
  }),
  
  
  // collection
  updateCollectionCount: (count) => ({
    type: 'UPDATE_COLLECTION_COUNT',
    count: count
  }),
  increaseCollectionCount: () => ({
    type: 'INCREASE_COLLECTION_COUNT'
  }),
  decreaseCollectionCount: () => ({
    type: 'DECREASE_COLLECTION_COUNT'
  })
};


export default appActions;