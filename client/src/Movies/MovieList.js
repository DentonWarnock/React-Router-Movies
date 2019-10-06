import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard.js';


const MovieList = props => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  const addSaveList = props.addToSavedList;
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div onClick={() => props.history.push(`/movies/${movie.id}`)}>
          <MovieCard {...props} key={movie.id} id={movie.id} movie={movie} addToSavedList={addSaveList} />
        </div>      
        
      ))}
    </div>
  );
}

export default MovieList;
