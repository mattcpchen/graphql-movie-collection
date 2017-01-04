

const movieReducer = (state, action) => {
  switch(action.type) {
    case 'SHOW_ALL_MOVIES':
    case 'SHOW_POPULAR_MOVIES':
    case 'SHOW_TOP_RATED_MOVIES':
    case 'SHOW_UPCOMING_MOVIES':
      return {
        id: action.id,
        category: action.category,
        title: action.title,
        thumb_url: action.thumb_url,
        added: action.added,
        popularity: action.popularity,
        vote_average: action.vote_average,
        release_date: action.release_date
      };
    case 'SHOW_MY_MOVIES':
      return {
        id: action.id,
        category: action.category,
        title: action.title,
        overview: action.overview,
        image_url: action.image_url,
        added: action.added,
        popularity: action.popularity,
        vote_average: action.vote_average,
        release_date: action.release_date
      };
    case 'TOGGLE_ADDED_STATE':
      if(state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        added: !state.added
      };
      
    default: return state;
  }
};




const moviesReducer = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_ALL_MOVIES':
    case 'SHOW_POPULAR_MOVIES':
    case 'SHOW_TOP_RATED_MOVIES':
    case 'SHOW_UPCOMING_MOVIES':
    case 'SHOW_MY_MOVIES':
      return action.movies
        .map(movie => movieReducer(null, {
          type: action.type,
          ...movie
        }));
    case 'TOGGLE_ADDED_STATE':
      if(action.isMyMovies) {
        return action.myMovies;
      }
      return state.map(thisState => movieReducer(thisState, action));
      
    default: return state;
  }
};



export default moviesReducer;