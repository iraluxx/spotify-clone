import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Playlist from './components/Playlist';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/playlist/:id" component={Playlist} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
};

export default App;