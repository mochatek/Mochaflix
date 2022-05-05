import { useRef, useState, useEffect } from "react";
import Api from "../lib/Api";

const SCROLL_UNIT = 700;

function Carousel({ name }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    new Api().get(name).then((data) => {
      setLoading(false);
      if ("error" in data) {
        setItems([]);
        setError(data.error);
      } else {
        setItems(data.results);
        setError("");
      }
    });
  }, [name]);

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
    >
      <h3>{name} Movies</h3>
      {items.length > 0 && (
        <section>
          <button className="prev-btn" onClick={previous}>
            <svg viewBox="0 0 24 24">
              <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"></path>
            </svg>
          </button>
          <ul ref={scroll_container}>
            {items.map(({ id, name, original_title, backdrop_path }) => (
              <li key={id}>
                <a href="#movie">
                  <img alt="poster" src={backdrop_path} />
                  <span>{name || original_title}</span>
                </a>
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
