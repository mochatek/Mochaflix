import Advertisement from "./Advertisement";

function MovieDetails() {
  return (
    <article id="basic">
      <img
        alt="poster"
        src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTRrdGFV2ypU29sTgtSBUqHCM9Zla9QSwgQHouMeIK-CRODJ0Bp899ESlV4_SXiB8MAO-Zhhi1lOUeO4Y9jnR9Cku6NO_o9HmVW1.jpg?r=daf"
        loading="eager"
      />
      <section>
        <div>
          <h2>Dasvi</h2>
          <p className="muted">
            <span>2021</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span className="boxed">U/A 7+</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span>2h 5m</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span>Boolywood Movies</span>
          </p>
          <p>
            Jailed under a tough cop, an uneducated politician decides to spend
            his time studying for high school, while his scheming wife has plans
            of her own.
          </p>
          <p>
            <span className="muted">Starring:&nbsp;&nbsp;</span>Abhishek
            Bachchan,Yami Gautam,Nimrat Kaur
          </p>
          <Advertisement />
        </div>
      </section>
    </article>
  );
}

export default MovieDetails;
