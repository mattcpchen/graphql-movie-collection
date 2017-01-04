import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import styles from './app.scss';
import appStore from './stores/appStore';
import Home from './components/Home';
import AllMovies from './components/AllMovies';
import CatMovies from './components/CatMovies';
import MyCollection from './components/MyCollection';








const App = () => {
  return (
    <Provider store={ appStore }>
      <Router history={ browserHistory }>
        <Route path="/" component={ Home }>
          <IndexRoute component={ MyCollection }></IndexRoute>
          <Route path="/all" component={ AllMovies }></Route>
          <Route path="/popular" component={ CatMovies }></Route>
          <Route path="/topRated" component={ CatMovies }></Route>
          <Route path="/upcoming" component={ CatMovies }></Route>
          <Route path="/collection" component={ MyCollection }></Route>
        </Route>
      </Router>
    </Provider>
  );
};


render(<App />, document.getElementById('root'));