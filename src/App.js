import Header from "./components/Header";
import Billboard from "./components/Billboard";
import Carousel from "./components/Carousel";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { CATEGORIES } from "./lib/constants";

function App() {
  return (
    <>
      <Header />
      <Billboard />
      {CATEGORIES.map((category) => (
        <Carousel key={category} category={category} />
      ))}
      <Banner />
      <Footer />
    </>
  );
}

export default App;
