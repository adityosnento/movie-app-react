import {GET, ERROR, ADD_POST, DELETE} from "../actions/types"

const initialState = {
    movies:[],
    errors:null
}

const movieReducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case DELETE:
            return {
                ...state,
                movies: state.movies.filter(item => item.id !== payload)
            }
        case ADD_POST:
            return {
                ...state,
                movies: [...state.movies, payload]
            }
        case GET:
            return {
                ...state,
                movies:payload
            }
        case ERROR:
            return {
                ...state,
                errors: payload
            }
        default:
            return {
                ...state
            }
    }
}


export default movieReducer