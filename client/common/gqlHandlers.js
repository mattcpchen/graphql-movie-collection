const initAllMovies = (curYearWeek, myMovieIds, callback) => {
  const myJsonMovieIds = JSON.stringify(myMovieIds);
  const queryString = `{
    initAllMovies(curYearWeek:"${curYearWeek}", myMovieIds:${myJsonMovieIds}) { 
      id, title, thumb_url, category, added 
    }
  }`;
  _makeGraphqlRequest(queryString, (status, data) => {
    callback(status, data.initAllMovies);
  });
};

const searchMoviesByCategory = (cat, callback) => {
  const specialInfoRequestMap = {
    'all': 'category',
    'popular': 'popularity',
    'top_rated': 'vote_average',
    'upcoming': 'release_date',
  };
  const queryString = `{
    searchMoviesByCategory(category:"${cat}") { 
      id, title, thumb_url, ${specialInfoRequestMap[cat]}, added 
    }
  }`;
  _makeGraphqlRequest(queryString, (status, data) => {
    callback(status, data.searchMoviesByCategory);
  });
};

const displayMyCollection = (callback) => {
  const queryString = `{
    displayMyCollection { 
      id, title, image_url, category, overview, popularity, vote_average, release_date
    }
  }`;
  _makeGraphqlRequest(queryString, (status, data) => {
    const movies = data.displayMyCollection;
    callback(status, movies);
  });
};

const addToCollection = (movie, callback) => {
  const queryString = `
    mutation {
      addToCollection(id:${movie.id}) { 
        id, title, image_url, category, overview, popularity, vote_average, release_date
      }
    }
  `;
  _makeGraphqlRequest(queryString, (status, data) => {
    const movies = data.addToCollection;
    callback(status, movies);
  });
};

const removeFromCollection = (movie, callback) => {
  const queryString = `
    mutation {
      removeFromCollection(id:${movie.id}) {
        id, title, image_url, category, overview, popularity, vote_average, release_date
      }
    }
  `;
  _makeGraphqlRequest(queryString, (status, data) => {
    const movies = data.removeFromCollection;
    callback(status, movies);
  });
};



const handlers = {
  initAllMovies,
  searchMoviesByCategory,
  displayMyCollection,
  addToCollection,
  removeFromCollection
};

export default handlers;









const _makeGraphqlRequest = (queryString, callback) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if(this.status == 200) {
      const response = JSON.parse(this.responseText);
      if(callback) callback(this.status, response.data);
    } else {
      const response = JSON.parse(this.responseText);
      const errMessage =response.errors[0].message;
      if(callback) callback(this.status, errMessage);
    }
  };
  xhttp.open("POST", '/graphql?query='+queryString, true);
  xhttp.send();
};
