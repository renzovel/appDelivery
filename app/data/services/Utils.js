export const NumberFormat = {
    currency(valor){
        const format = new Intl.NumberFormat('pr-BR',{
            style:'currency',
            currency:'BRL'
        })
        return format.format(valor);
    }
}

