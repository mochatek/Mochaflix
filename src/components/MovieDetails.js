import Advertisement from "./Advertisement";
import { forwardRef } from "react";

const MovieDetails = forwardRef(({ details }, ref) => {
  return (
    details && (
      <article id="basic" ref={ref}>
        <img alt="poster" src={details.poster} loading="eager" />
        <section>
          <div>
            <h2>{details.title}</h2>
            <p className="muted">
              <span>{details.release}</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <span className="boxed">{details.rating}</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <span>{details.runtime}</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <span>{details.genres}</span>
            </p>
            <p>{details.overview}</p>
            <p>
              <span className="muted">Languages:&nbsp;&nbsp;</span>
              {details.language}
            </p>
            <Advertisement />
          </div>
        </section>
      </article>
    )
  );
});

export default MovieDetails;
