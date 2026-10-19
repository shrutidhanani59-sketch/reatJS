export const addProduct = (product)=>{
    return{
        type : "ADD_PRODUCT",
        data : product
    }
}
export const updateProduct = (product)=>{
    return{
        type : "UPDATE_PRODUCT",
        data : product
    }
}
export const deleteProduct = (id)=>{
    return{
        type : "DELETE_PRODUCT",
        data : id
    }
}