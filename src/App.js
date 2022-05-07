import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./routes/NotFound";
import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./scss/App.scss";

const Home = lazy(() => import("./routes/Home"));
const Movie = lazy(() => import("./routes/Movie"));

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:movie_id" element={<Movie />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
