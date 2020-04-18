import { GET_MOVIE} from "../actions/types";

const initialState = {
  movies: false,
  genres: [],
  errors: null,
  movie_genre: false
};

const getMovies = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE:
      return {
        ...state,
        movies: payload
      };
    case "GET_ALL_GENRE":
      return {
        ...state,
        genres: payload
      };
    case "GET_GENRE":
      return {
        ...state,
        movies: payload
      }
    case "SEARCH_GENRE":
      return {
        ...state,
        movies: payload
      }
      case "GET_MOVIE_DETAIL":
        console.log(payload)
        return {
          ...state,
          movies: payload
        }
    default:
      return {
        ...state
      };
  }
};

export default getMovies;
