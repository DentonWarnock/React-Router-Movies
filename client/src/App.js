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
      
      {/* <SavedList list={savedList} setSavedList={setSavedList} /> */}
      <Route path="/" render={props => <SavedList list={savedList} setSavedList={setSavedList} />}  />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" render={props => <MovieCard id={props.match.params.id} addToSavedList={addToSavedList} list={savedList} />} />
    </div>
    );
  };

export default App;
