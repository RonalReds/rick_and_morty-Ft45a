import axios from "axios";
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-type";

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            alert(error.message)
        }
    }; 
 };


export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint)
            .then(({ data }) => {
                return dispatch({
                    type: REMOVE_FAV,
                    payload: data,
            });
       });
    };
 };

export const filterCards = (gender) => {
    return {type : FILTER, payload: gender}
}
export const orderCards = (order) => {
    return {type : ORDER, payload: order}
}

