import Header from "./components/Header";
import Billboard from "./components/Billboard";
import Carousel from "./components/Carousel";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const CATEGORIES = [
  "Latest",
  "Trending",
  "Top rated",
  "Family",
  "Action",
  "Thriller",
  "Horror",
  "Comedy",
  "Crime",
  "Documentary",
];

function App() {
  return (
    <>
      <Header />
      <Billboard />
      {CATEGORIES.map((category) => (
        <Carousel key={category} name={category} />
      ))}
      <Banner />
      <Footer />
    </>
  );
}

export default App;
