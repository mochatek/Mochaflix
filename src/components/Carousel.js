import { useRef } from "react";

const SCROLL_UNIT = 600;

function Carousel({ title }) {
  const scroll_container = useRef(null);

  function previous() {
    scroll_container.current.scrollLeft -= SCROLL_UNIT;
  }

  function next() {
    scroll_container.current.scrollLeft += SCROLL_UNIT;
  }

  return (
    <article>
      <h3>{title}</h3>
      <section className="carousel">
        <button className="prev-btn" onClick={previous}>
          <svg viewBox="0 0 24 24">
            <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"></path>
          </svg>
        </button>
        <ul ref={scroll_container}>
          {[1, 2, 3, 4, 5, 6, 7].map((_) => (
            <li key={Date.now() + Math.random()}>
              <a href="#movie">
                <img
                  alt="poster"
                  loading="lazy"
                  src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaenZt4WFYfHi3Cgab25LxNZDlNVab779QItSFFf4AfvGk2HWp2j9QbaNjkfREk3jgikWNSsSW5YgIsW616ujlYzKhg.jpg?r=86a  "
                />
                <span>Mocha</span>
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
    </article>
  );
}

export default Carousel;
