import MovieDetails from "../components/MovieDetails";
import SimilarMovies from "../components/SimilarMovies";
import { Fragment, useRef, useEffect } from "react";
import useMovie from "../hooks/useMovie";
import "../scss/Movie.scss";

function Movie() {
  const { details, similar } = useMovie();
  const detailsRef = useRef(null);

  useEffect(() => {
    detailsRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [details]);

  return (
    <Fragment>
      <MovieDetails details={details} ref={detailsRef} />
      <blockquote className="muted">
        A <strong>Netflix</strong> clone by{" "}
        <a rel="noreferrer" target="_blank" href="https://github.com/mochatek">
          MochaTek
        </a>
        . <br />
        <em>
          Mochaflix uses the TMDb API but is not endorsed or certified by{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.themoviedb.org/"
          >
            TMDb
          </a>
        </em>
        .
      </blockquote>
      <SimilarMovies similar={similar} />
    </Fragment>
  );
}

export default Movie;
