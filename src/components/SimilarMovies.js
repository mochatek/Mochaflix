function SimilarMovies() {
  return (
    <article id="similars">
      <h2>More Like This</h2>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => (
          <img
            alt="poster"
            src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTRrdGFV2ypU29sTgtSBUqHCM9Zla9QSwgQHouMeIK-CRODJ0Bp899ESlV4_SXiB8MAO-Zhhi1lOUeO4Y9jnR9Cku6NO_o9HmVW1.jpg?r=daf"
          />
        ))}
      </div>
    </article>
  );
}

export default SimilarMovies;
