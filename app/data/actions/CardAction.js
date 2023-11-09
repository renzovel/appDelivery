export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';
export const CART_CLEAR_PRODUCT = 'CART_CLEAR_PRODUCT';
export const CART_REQUEST_PRODUCTS = 'CART_REQUEST_PRODUCTS';

export const cartAddProduct = (value) => ({
    type:CART_ADD_PRODUCT,
    value
})


export const cartRemoveProduct = (value) => ({
    type:CART_REMOVE_PRODUCT,
    value
})


export const cartClearProduct = () => ({
    type:CART_CLEAR_PRODUCT
})


export const cartRequestProduct = () => ({
    type:CART_REQUEST_PRODUCTS
})

