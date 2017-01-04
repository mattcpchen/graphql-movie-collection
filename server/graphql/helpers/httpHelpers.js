import http from 'http';


const apiKey = '4eefd6a2ae8c256b3b9d7aeb5438a18c';
const thumbUrlBase = 'https://image.tmdb.org/t/p/w300/';
const imageUrlBase = 'https://image.tmdb.org/t/p/w185/';



const fetchMoviesByCategory = (category, callback) => {
  _fetchMovieDBMovies(category, data=> {
    let movies = data.results;
    movies = movies.map(movie => {
      return Object.assign(movie, {
        id: movie.id.toString(),
        category: category,
        thumb_url: (movie.backdrop_path === null)?'/images/noThumb.jpg':thumbUrlBase + movie.backdrop_path,
        image_url: (movie.poster_path === null)?'/images/noImage.jpg':imageUrlBase + movie.poster_path,
        added: false
      })
    });
  
    callback(movies);
  });
};


const fetchMovieByMovieId = (mid, callback) => {
  _fetchMovieDBMovies(mid, data=> {
    if(data.status_code === 34) { // when error
      callback(null);
      return;
    }
  
    let movie = data;
    Object.assign(movie, {
      id: movie.id.toString(),
      category: '*deprecated',
      thumb_url: (movie.backdrop_path === null)?'/images/noThumb.jpg':thumbUrlBase + movie.backdrop_path,
      image_url: (movie.poster_path === null)?'/images/noImage.jpg':imageUrlBase + movie.poster_path,
      added: false
    });
    
    callback(movie);
  });
};


module.exports = {
  fetchMoviesByCategory,
  fetchMovieByMovieId
};











const _fetchMovieDBMovies = (_param, _callback) => {
  http.get({
    host: 'api.themoviedb.org',
    path: '/3/movie/'+_param+'?api_key='+apiKey+'&language=en-US'
  }, (response) => {
    let body = '';
    response.on('data', d => body += d);
    response.on('end', () => {
      const data = JSON.parse(body);
      _callback(data);
    });
  });
};