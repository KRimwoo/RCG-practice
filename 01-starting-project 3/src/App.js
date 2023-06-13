import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler() {
    fetch("http://swapi.dev/api/films/")
      .then((response) => {
        return response.json(); //json = built-in method in response object => return Promise object
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  }
  //movie format
  // <li className={classes.movie}>
  //     <h2>{props.title}</h2>
  //     <h3>{props.releaseDate}</h3>
  //     <p>{props.openingText}</p>
  // </li>

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
