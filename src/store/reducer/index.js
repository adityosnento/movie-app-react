import {combineReducers} from 'redux';
import movieReducer from "./movielist"
import auth from "./auth"
import movieData from "./movie_data"


export default combineReducers({
   movieReducer,
   auth,
   movieData
});



