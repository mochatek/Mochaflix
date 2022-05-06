import { useRef } from "react";
import { Link } from "react-router-dom";
import useCarousel from "../hooks/useCarousel";
import { SCROLL_UNIT } from "../lib/constants";

function Carousel({ category }) {
  const { loading, items, error } = useCarousel(category);

  const scroll_container = useRef(null);

  function previous() {
    scroll_container.current.scrollLeft -= SCROLL_UNIT;
  }

  function next() {
    scroll_container.current.scrollLeft += SCROLL_UNIT;
  }

  return (
    <article
      className={
        loading ? "carousel loading" : error ? "carousel error" : "carousel"
      }
      data-error={error}
    >
      <h3>{category} Movies</h3>
      {items.length > 0 && (
        <section>
          <button className="prev-btn" onClick={previous}>
            <svg viewBox="0 0 24 24">
              <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"></path>
            </svg>
          </button>

          <ul ref={scroll_container}>
            {items.map(({ id, title, poster }) => (
              <li key={id}>
                <Link to={`/movie/${id}`}>
                  <img alt="poster" src={poster} />
                  <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <button className="next-btn" onClick={next}>
            <svg viewBox="0 0 24 24">
              <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"></path>
            </svg>
          </button>
        </section>
      )}
    </article>
  );
}

export default Carousel;
