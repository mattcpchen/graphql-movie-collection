


const categoryReducer = (state='ALL_MOVIES', action) => {
  switch(action.type) {
    case 'ALL_MOVIES': return 'ALL_MOVIES';
    case 'POPULAR_MOVIES': return 'POPULAR_MOVIES';
    case 'TOP_RATED_MOVIES': return 'TOP_RATED_MOVIES';
    case 'UPCOMING_MOVIES': return 'UPCOMING_MOVIES';
    case 'MY_MOVIES': return 'MY_MOVIES';
    
    default: return state;
  }
};


export default categoryReducer;