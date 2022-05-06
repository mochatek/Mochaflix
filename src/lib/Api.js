import { GENRE_MAP } from "../lib/constants";

export default class Api {
  constructor() {
    this.api_key = "4251ad6189656cd33f14d643b1a4779c";
    this.baseURI = "https://api.themoviedb.org/3";
  }

  async load(category, movie_id, limit = 10) {
    let endpoint;

    switch (category) {
      case "Top Rated":
        endpoint = `${this.baseURI}/movie/top_rated?api_key=${this.api_key}`;
        break;
      case "Similar":
        endpoint = `${this.baseURI}/movie/${movie_id}/similar?api_key=${this.api_key}`;
        break;
      default:
        endpoint = `${this.baseURI}/discover/movie?api_key=${this.api_key}&with_genres=${GENRE_MAP[category]}`;
        break;
    }

    try {
      const response = await fetch(endpoint);
      const { results } = await response.json();
      return {
        results: results
          .filter((item) => item.backdrop_path)
          .slice(0, limit)
          .map((item) => ({
            id: item.id,
            title: item.name || item.original_title,
            poster: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
          })),
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async get(movie_id) {
    try {
      const response = await fetch(
        `${this.baseURI}/movie/${movie_id}?api_key=${this.api_key}`
      );
      const data = await response.json();
      return {
        title: data.title || data.original_title,
        release: data.release_date.split("-")[0],
        poster: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
        genres: data.genres
          .slice(0, 3)
          .map((g) => g.name)
          .join(", "),
        overview: data.overview,
        runtime: `${data.runtime}m`,
        rating: data.vote_average,
        language: data.spoken_languages
          .slice(0, 3)
          .map((l) => l.english_name)
          .join(", "),
      };
    } catch (error) {
      return { error: error.message };
    }
  }
}
