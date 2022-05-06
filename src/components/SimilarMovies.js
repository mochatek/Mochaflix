import { useState, useEffect } from "react";
import Api from "../lib/Api";

function SimilarMovies({ movie_id }) {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    new Api()
      .load("Similar", movie_id, 12)
      .then((data) => setSimilar(data.results));
  }, [movie_id]);

  return (
    <article id="similars">
      <h2>More Like This</h2>
      <div>
        {similar.map(({ id, poster }) => (
          <img key={id} alt="poster" src={poster} />
        ))}
      </div>
    </article>
  );
}

export default SimilarMovies;
