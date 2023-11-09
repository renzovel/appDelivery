import {
    PRODUTS_REQ,
    PRODUTS_RES,
    PRODUT_SEL
} from '../actions/ProductAction';

export const initialState = {
    productList:[],
    productSelect: null
}

export const ProductReducer = (state = initialState, action) =>{
    switch (action.type) {      
        case PRODUTS_RES:
            return {...state, productList: action.values};   
        case PRODUT_SEL:
            return {...state, productSelect: action.value};       
        default:
            return state;
    }
}