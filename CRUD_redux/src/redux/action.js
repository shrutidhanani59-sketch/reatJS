export const addProduct = (product)=>{
    return{
        type : "ADD_PRODUCT",
        data : product
    }
}
export const updateProduct = (_)=>{
    return{
        type : "UPDATE_PRODUCT",
        data : _
    }
}
export const deleteProduct = (id)=>{
    return{
        type : "DELETE_PRODUCT",
        data : id
    }
}