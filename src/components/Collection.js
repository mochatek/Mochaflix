function Collection({ title }) {
  return (
    <article>
      <h3>{title}</h3>
      <section className="collection">
        <button className="prev-btn">
          <svg viewBox="0 0 24 24">
            <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"></path>
          </svg>
        </button>
        <div className="slider">
          <ul>
            {[1, 2, 3, 4, 5, 6, 7].map((_) => (
              <li>
                <a href="#movie">
                  <img
                    alt="poster"
                    src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaenZt4WFYfHi3Cgab25LxNZDlNVab779QItSFFf4AfvGk2HWp2j9QbaNjkfREk3jgikWNSsSW5YgIsW616ujlYzKhg.jpg?r=86a  "
                  />
                  <span>Mocha</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button className="next-btn">
          <svg viewBox="0 0 24 24">
            <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"></path>
          </svg>
        </button>
      </section>
    </article>
  );
}

export default Collection;
