const initialState={
    products:[],
    isLoggedIn: false,
    cart:0
};

export default function Reducers (state= initialState, action){
    switch(action.type){
       
        case 'GET_PRODUCTS':
            return{...state, products: action.payload};

            case 'ADD_CART':
                return{...state, cart:state.cart+1}
                default:
                    return state ;

    }
}