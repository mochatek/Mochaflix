import Header from "./components/Header";
import Billboard from "./components/Billboard";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Billboard />
      <Carousel title={"Popular On Mochaflix"} />
      <Carousel title={"Popular On Mochaflix"} />
      <Footer />
    </>
  );
}

export default App;
