import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./MovieGrid.css";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  async function getTopMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${movieURL}top_rated?${apiKey}`;
    getTopMovies(topRatedUrl);
  }, []);

  return (
    <div className='container'>
      <h2 className='title'>Best rated movies</h2>
      <section className='movies-container'>
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </section>
    </div>
  );
};

export default Home;
