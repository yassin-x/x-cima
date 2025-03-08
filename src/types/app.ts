export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  media_type?: string;
  release_date: string;
  title: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieListType {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}
