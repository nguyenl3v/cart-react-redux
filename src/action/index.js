import * as types from './../contants/ActionsType';
export const actADD_TO_CART = (product,quantity)=>{
    return{
        type:types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actMessage = (message)=>{
    return{
        type:types.ONCLICK_MSG,
        message
    }
}
export const deleteProductInCart = (product)=>{
    return{
        type:types.DELETECART,
        product
    }
}
export const deleteMessage = (message)=>{
    return{
        type:types.DELETE_MSG,
        message
    }
}
export const addQuantity = (product,quantity)=>{
    return{
        type:types.addQuantity,
        product,
        quantity
    }
}