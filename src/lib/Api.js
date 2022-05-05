const NETFLIX_ID = 123;
const GENRE_MAP = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  "Science Fiction": 878,
  "TV Movie": 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

export default class Api {
  constructor() {
    this.api_key = "4251ad6189656cd33f14d643b1a4779c";
    this.server = "https://api.themoviedb.org/3";
    this.endpoints = {
      Latest: `${this.server}/discover/tv?api_key=${this.api_key}&with_network=${NETFLIX_ID}`,
      Trending: `${this.server}/trending/all/week?api_key=${this.api_key}`,
      "Top Rated": `${this.server}/movie/top_rated?api_key=${this.api_key}`,
    };
  }

  async get(type) {
    let endpoint = this.endpoints[type];
    if (!endpoint) {
      const genre_id = GENRE_MAP[type] || 28;
      endpoint = `${this.server}/discover/movie?api_key=${this.api_key}&with_genres=${genre_id}`;
    }

    try {
      const response = await fetch(endpoint);
      const { results } = await response.json();
      return {
        results: results
          .filter((item) => item.backdrop_path)
          .map((item) => ({
            ...item,
            backdrop_path: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
          })),
      };
    } catch (error) {
      return { error: error.message };
    }
  }
}
