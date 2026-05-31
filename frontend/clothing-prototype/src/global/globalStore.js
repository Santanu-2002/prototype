import {configureStore} from "@reduxjs/toolkit";

import categoryReducer from "./slices/categorySlice";
import addressReducer from "./slices/addressSlice";
import userReducer from "./slices/userSlice";
import productreducer  from "./slices/productSlice";
import pageReducer  from "./slices/viewPageSlice";
import cartReducer from "./slices/cartItemSlice";

const globalStore = configureStore({
    reducer:{
        category : categoryReducer,
        address :addressReducer,
        user: userReducer,
        product: productreducer,
        page: pageReducer,
        cartDetail : cartReducer,
    }
});

export default globalStore;