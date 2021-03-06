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
            let addGames = state.games.find((game) => game.id === action.payload);
            let itemCart = state.cart.find(item=> item.id === addGames.id);


            return itemCart
            ?{...state, 
                cart: state.cart.map(item=>
                item.id === itemCart.id
                ?{...item,cantidad: item.cantidad+1}
                :item)}
            : {...state,cart:[...state.cart,{...addGames,cantidad:1}]}
          
            //{
              //...state,
                //cart: [...state.cart, {addGames,quantity}],
            //};
    
            case 'DELETE_FROM_CART':
            let deleteGame = state.cart.find((game) => game.id === action.payload);
            

            return deleteGame.cantidad > 1
            ?{
                ...state,
            cart:state.cart.map(item=>
                item.id=== action.payload
                ? {...item,cantidad:item.cantidad-1}
                : item
                )}
            :{...state,
                cart: state.cart.filter(item=> item.id !== action.payload)}
            //{
              //  ...state,
                //cart: state.cart.filter((game) => game.id !== action.payload),
            //};
            case 'REMOVE_ALL_FROM_CART':
            return {
                ...state,
                 cart:[]
         };
        default:
            return state;
    }
}
    
export default rootReducer;