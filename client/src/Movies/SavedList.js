import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">
        <NavLink to={`/movies/${movie.id}`} >
          {movie.title}
        </NavLink>
      </span>
    ))}
    <div>
      <NavLink to="/">
        <div className="home-button">Home</div>
      </NavLink>
      {/* Clear Movies Button */}
      <div className="home-button" onClick={() => props.setSavedList([])}>Clear Saved Movies</div>
    </div>
  </div>
);

export default SavedList;
