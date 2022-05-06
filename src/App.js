import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./routes/Home";
import Movie from "./routes/Movie";
import "./scss/App.scss";

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Movie />
      <Footer />
    </>
  );
}

export default App;
