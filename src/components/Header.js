import Logo from "../logo.png";
import Icon from "../icon.png";

function Header() {
  return (
    <header>
      <picture>
        <source srcSet={Icon} media="(max-width: 660px)" />
        <img alt="logo" src={Logo} />
      </picture>
      <div>
        <small>UNLIMITED TV SHOWS & MOVIES</small>
        <button className="btn-red">join now</button>
        <button>sign in</button>
      </div>
    </header>
  );
}

export default Header;
