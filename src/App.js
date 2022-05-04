import Header from "./components/Header";
import Billboard from "./components/Billboard";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <Header />
      <Billboard />
      <Carousel title={"Popular On Mochaflix"} />
      <Carousel title={"Popular On Mochaflix"} />
    </>
  );
}

export default App;
