const localStorageKey = 'gqlMovieCollection';



const retriveMyCollection = () => {
  let svalue = localStorage.getItem(localStorageKey);
  if(svalue === null) {
    localStorage.setItem(localStorageKey, '');
    svalue = '';
  }
  return svalue.split('|').filter(val => val!=='');
};


const updateMyCollection = (movieIds) => {
  localStorage.setItem(localStorageKey, movieIds.join('|'));
};


const addToCollection = (movieId) => {
  let svalue = localStorage.getItem(localStorageKey);
  if(svalue === '') {
    svalue = movieId;
  } else {
    if(svalue.split('|').indexOf(movieId) === -1) {
      svalue = (movieId + '|') + svalue;
    }
  }
  localStorage.setItem(localStorageKey, svalue);
};

const removeFromCollection = (movieId) => {
  let svalueArr = localStorage.getItem(localStorageKey).split('|');
  svalueArr = svalueArr.filter(value => value !== movieId);
  localStorage.setItem(localStorageKey, svalueArr.join('|'));
};




const handlers = {
  retriveMyCollection,
  updateMyCollection,
  addToCollection,
  removeFromCollection
};

export default handlers;




