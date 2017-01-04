


const categoryReducer = (state=false, action) => {
  switch(action.type) {
    case 'APP_IS_LOADED': return true;
    
    default: return state;
  }
};


export default categoryReducer;