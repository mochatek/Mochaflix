import Icon from "../assets/icon.png";

function Advertisement() {
  return (
    <div id="ads">
      <div>
        <img alt="icon" src={Icon} />
        <span>Watch all you want.</span>
      </div>
      <button className="btn-red">join now</button>
    </div>
  );
}

export default Advertisement;
