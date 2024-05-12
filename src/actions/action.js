import axios from "axios";

export function fetchProducts() {
    return async (dispatch) => {
        try {
            let allProducts = [];
            // Fetch data 10 times
            for (let i = 0; i < 10; i++) {
                const res = await axios.get('https://dummyjson.com/products', { params: { limit: 30 } });
                allProducts = [...allProducts, ...res.data.products];
            }
            dispatch({ type: 'GET_PRODUCTS', payload: allProducts });
        } catch (error) {
            console.log(error);
        }
    };
}
