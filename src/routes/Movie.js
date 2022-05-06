import MovieDetails from "../components/MovieDetails";
import SimilarMovies from "../components/SimilarMovies";
import { Fragment } from "react";
import "../scss/Movie.scss";

function Movie() {
  return (
    <Fragment>
      <MovieDetails />
      <blockquote className="muted">
        A <strong>Netflix</strong> clone by{" "}
        <a rel="noreferrer" target="_blank" href="https://github.com/mochatek">
          MochaTek
        </a>
        . Mochaflix uses the TMDb API but is not endorsed or certified by{" "}
        <a rel="noreferrer" target="_blank" href="https://www.themoviedb.org/">
          TMDb
        </a>
        .
      </blockquote>
      <SimilarMovies />
    </Fragment>
  );
}

export default Movie;
