export const PRODUTS_REQ = 'PRODUTS_REQUEST';
export const PRODUTS_RES = 'PRODUTS_RESPONSE';
export const PRODUT_SEL = 'PRODUTS_SELECT';

export const reqProducts = () => ({
    type:PRODUTS_REQ
})

export const resProducts = (values) => ({
    type:PRODUTS_RES,
    values
})

export const selProduct = (value) => ({
    type:PRODUT_SEL,
    value
})