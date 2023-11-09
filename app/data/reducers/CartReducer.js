import {
    CART_ADD_PRODUCT,
    CART_REMOVE_PRODUCT,
    CART_CLEAR_PRODUCT
} from '../actions/CardAction';

export const initialState = {
    products:[]
}


export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD_PRODUCT:
            return {...state, products : [...state.products, action.value] };

        case CART_REMOVE_PRODUCT:
            const newProductList = state.products.filter(item => item!==action.value);
            return {...state, products : newProductList };

        case CART_CLEAR_PRODUCT:
            return {...state, products:[]};
    
        default:
            return state;
    }

}