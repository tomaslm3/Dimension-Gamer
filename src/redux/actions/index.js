import axios from "axios";

export const getGames = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:8000/games");
            dispatch({
                type: "GET_GAMES",
                payload: response.data,
            });
        } catch (error) {
            console.log('Error en Accion getGames' + error);
        }
    }
}

export const addToCart = (payload) => {
    return {
        type: "ADD_TO_CART",
        payload: payload,
    };
}

export const deleteFromCart = (payload) => {
    return {
        type: "DELETE_FROM_CART",
        payload: payload,
    };
}

export const fethCart = () => {
    return {
        type: "FETCH_CART",
    };
}
