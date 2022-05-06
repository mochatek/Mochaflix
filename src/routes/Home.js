import Billboard from "../components/Billboard";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner";
import { Fragment } from "react";
import { CATEGORIES } from "../lib/constants";
import "../scss/Home.scss";

function Home() {
  return (
    <Fragment>
      <Billboard />
      {CATEGORIES.map((category) => (
        <Carousel key={category} category={category} />
      ))}
      <Banner />
    </Fragment>
  );
}

export default Home;
