import { useState, useEffect } from "react";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import "./Movie.css";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  async function getMovie(url) {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  }

  useEffect(() => {
    const movieUrl = `${movieURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  function formatCurrency(num) {
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <div className='movie-page'>
      <>
        {movie && (
          <>
            <MovieCard movie={movie} showLink={false} />
            <p className='tagline'>{movie.tagline}</p>
            <div className='info'>
              <h3>
                <BsWallet2 /> Budget
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className='info'>
              <h3>
                <BsGraphUp /> Revenue
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className='info'>
              <h3>
                <BsHourglassSplit /> Runtime
              </h3>
              <p>{movie.runtime} min</p>
            </div>
            <div className='info'>
              <h3>
                <BsFillFileEarmarkTextFill /> Overview
              </h3>
              <p id='overview'>{movie.overview}</p>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Movie;
