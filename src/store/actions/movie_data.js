import {GET_MOVIE, ERROR} from "./types";
const baseURL = "https://awesome-movie-data.herokuapp.com/api/v1";

export const getMovies = (pageNumber) => async dispatch => {
    try {
        const res = await fetch (`${baseURL}/movies/all/?page=${pageNumber}`);
        const data = await res.json();
        dispatch({
            type: GET_MOVIE,
            payload: data.data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: ERROR,
            payload: error
        })
    }
}

export const getAllGenre = () => async dispatch => {
    try {
        const res = await fetch (`${baseURL}/movies/allgenre`);
        const data = await res.json();
        dispatch({
            type: "GET_ALL_GENRE",
            payload: data.data
        })
    } catch (error) {
        console.log("GA DAPET")
        dispatch({
            type: ERROR,
            payload: error
        })
    }
}

export const getGenre = (genre) => async dispatch => {
    try {
        console.log(genre)
        const res = await fetch (`${baseURL}/movies/genre?genre=${genre}`);
        const data = await res.json();
        dispatch({
            type: "GET_GENRE",
            payload: data.data
        })
    } catch (error) {
        console.log("GA DAPET")
        dispatch({
            type: ERROR,
            payload: error
        })
    }
}

export const searchGenre = (search) => async dispatch => {
    console.log("search",search)
    try {
        const res = await fetch (`${baseURL}/movies/search?like=${search}`,
        
        );
        const data = await res.json();
        dispatch({  
            type: "SEARCH_GENRE",
            payload: data.data
        })
    } catch (error) {
        console.log("GA DAPET")
        dispatch({
            type: ERROR,
            payload: error
        })
    }
}

export const movieDetail = (id) => async dispatch => {
    console.log("search",id)
    try {
        const res = await fetch (`${baseURL}/movies?movieId=${id}`,
        
        );
        const data = await res.json();
        console.log("movei detail", data.data)
        dispatch({  
            type: "GET_MOVIE_DETAIL",
            payload: data.data
        })
    } catch (error) {
        console.log("GA DAPET")
        dispatch({
            type: ERROR,
            payload: error
        })
    }
}
