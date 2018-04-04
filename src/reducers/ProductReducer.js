function ProductReducer(state = {}, action) {
    switch (action.type) {
        case "PRODUCT_SUCCESS": return action.response;
        case "PRODUCT_ERROR": return action.response;
        default: return state;
    }
}

export default ProductReducer;
