import "../scss/NotFound.scss";

function NotFound() {
  return (
    <article id="notFound">
      <h1>Lost your way?</h1>
      <p>
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </p>
      <a href="/" className="btn-red">
        Mochaflix Home
      </a>
      <p>
        Error Code <span>PNF-404</span>
      </p>
    </article>
  );
}

export default NotFound;
