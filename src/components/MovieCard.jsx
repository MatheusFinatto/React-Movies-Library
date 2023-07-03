import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imgUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imgUrl + movie.poster_path} alt="Movie card" />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average} based on {movie.vote_count} votes
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
    </div>
  );
};

export default MovieCard;
