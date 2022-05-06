import { FOOTER_ITEMS } from "../lib/constants";

function Footer() {
  return (
    <footer>
      <p>Questions? Contact Us.</p>
      <ul>
        {FOOTER_ITEMS.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div>
        <select>
          <option value="EN">English</option>
          <option value="HI">हिन्दी</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
