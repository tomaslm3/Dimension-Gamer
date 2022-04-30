const initialState = {
    cart: [],
    games: [],
    loading: false,
    error: null,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_GAMES':
            return {
                ...state,
                games: action.payload,
            };
            case 'FETCH_CART':
                return {
                    ...state,
                };
            case 'ADD_TO_CART':
            const addGames = state.games.find((game) => game.id === action.payload);

            return {
                ...state,
                cart: [...state.cart, addGames],
            };
            case 'DELETE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((game) => game.id !== action.payload),
            };
        // case actions.REMOVE_ALL_FROM_CART:
        //     return {
        //         ...state,
        //         cart: [],
        //     };
        default:
            return state;
    }
}
    
export default rootReducer;