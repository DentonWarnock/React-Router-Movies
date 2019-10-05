import React, { useState } from 'react';
import { Route } from "react-router-dom";
import MovieList from './Movies/MovieList.js'
import MovieCard from './Movies/MovieCard.js'
import SavedList from './Movies/SavedList.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={MovieCard} />
    </div>
    );
  };

export default App;
