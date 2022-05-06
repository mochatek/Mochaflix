import { Link } from "react-router-dom";

function SimilarMovies({ similar }) {
  return (
    similar && (
      <article id="similars">
        <h2>More Like This</h2>
        <div>
          {similar.map(({ id, poster }) => (
            <Link to={`/movie/${id}`} key={id}>
              <img alt="poster" src={poster} />
            </Link>
          ))}
        </div>
      </article>
    )
  );
}

export default SimilarMovies;
