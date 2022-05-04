const FOOTER_ITEMS = [
  "FAQ",
  "Help Centre",
  "Account",
  "Media Centre",
  "Invester Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Informations",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Mochaflix",
];

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
