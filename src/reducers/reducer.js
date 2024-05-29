const initialState = {
    products: [],
    isLoggedIn: false,
    cart: 0,
    searchedItem: "",
    cartItems: [],
    viewItem: {}

  };
  
  export default function Reducers(state = initialState, action) {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
  
      case "ADD_CART":
        return { ...state, cart: state.cart + 1 };
  
      case "SEARCHED_ITEM":
        return { ...state, searchedItem: action.payload };
  
      case "LOGGED_IN":
        return { ...state, isLoggedIn: action.payload };
  
      case "CART_ITEMS":
        return { ...state, cartItems: [...state.cartItems, action.payload] };
  
        case "VIEW_PRODUCT":
          return { ...state, viewItem: action.payload };
          
      default:
        return state;
    }
  }
  