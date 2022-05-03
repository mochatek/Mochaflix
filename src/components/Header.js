import Logo from "../logo.png";

function Header() {
  return (
    <header>
      <img alt="logo" src={Logo} />
      <div>
        <button className="btn-red">join now</button>
        <button>sign in</button>
      </div>
    </header>
  );
}

export default Header;
