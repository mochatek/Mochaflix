import Logo from "../assets/logo.png";
import Icon from "../assets/icon.png";

function Header() {
  return (
    <header>
      <a href="/">
        <picture>
          <source srcSet={Icon} media="(max-width: 660px)" />
          <img alt="logo" src={Logo} />
        </picture>
      </a>
      <div>
        <small>UNLIMITED TV SHOWS & MOVIES</small>
        <button className="btn-red">join now</button>
        <button>sign in</button>
      </div>
    </header>
  );
}

export default Header;
