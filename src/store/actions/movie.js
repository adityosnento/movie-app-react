import {GET, ERROR, POST, ADD_POST, DELETE} from "./types";
const baseURL = "https://jsonplaceholder.typicode.com";

export const getMovies = () => async dispatch => {
    try {
        const res = await fetch (`${baseURL}/todos?_limit=10`);
        const data = await res.json();
        dispatch({
            type: GET,
            payload: data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: ERROR,
            payload: error
        })
    }
}

export const addMovie = post => async dispatch => {
    console.log(post)
    try {
        const add = {
            title: post
        }

        const res = await fetch (`${baseURL}/todos`, {
            method: POST,
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(add)
        })
        const data = await res.json()
        console.log(data)
        dispatch ({
            type: ADD_POST,
            payload: data
        })
    } catch (error) {

    }
}

export const deleteMovie = id => async dispatch => {
    try {
        const res = await fetch (`${baseURL}/todos/${id}`, {
            method: DELETE,
            headers: {
                "Content-Type" : "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        dispatch ({
            type: DELETE,
            payload: id
        })
    } catch (error) {
        console.log("error")
    }
}