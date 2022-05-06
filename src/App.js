import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Movie from "./routes/Movie";
import NotFound from "./routes/NotFound";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./scss/App.scss";

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:movie_id" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
