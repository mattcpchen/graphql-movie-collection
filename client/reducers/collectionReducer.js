


const collectionCountReducer = (state = 0, action) => {
  switch(action.type) {
    case 'UPDATE_COLLECTION_COUNT':
      return action.count;
    case 'INCREASE_COLLECTION_COUNT':
      return state + 1;
    case 'DECREASE_COLLECTION_COUNT':
      return state - 1;
      
    default: return state;
  }
};


export default collectionCountReducer;