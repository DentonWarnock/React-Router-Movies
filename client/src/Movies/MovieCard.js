import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieCard = (props) => {
  const [movie, setMovie] = useState();
  
  useEffect(() => {
    const id = props.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  // const saveButton = () => {
  //   const currentSavedList = props.list;
  //   console.log(currentSavedList);
  //   if (currentSavedList.includes(movie)) {
      
  //   } else {
  //     saveMovie();
  //   }
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  console.log("Movie Card PROPS: ", props);
  return (
    <div className="save-wrapper" >
      <div className="movie-card" >
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>     
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      {/* Save Button -- trying to get only to show on /movies/:id path */}
        {props.id ? <div onClick={() => saveMovie()} className="save-button">Save</div> : null  }
        {/* {props.id ? <div onClick={saveButton()} className="save-button">Save</div> : null  } */}
    </div>
  );
}

export default MovieCard;
