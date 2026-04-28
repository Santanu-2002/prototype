import {configureStore} from "@reduxjs/toolkit";

import categoryReducer from "./slices/categorySlice";
import addressReducer from "./slices/addressSlice";
import userReducer from "./slices/userSlice";
import useGender from "./slices/genderSlice";
import articleReducer from "./slices/articleSlice";
import masterCategoryReducer from "./slices/masterCategorySlice";
import clothiTypeReducer  from "./slices/clothTypeSlice";
import productreducer  from "./slices/productSlice";
import pageReducer  from "./slices/viewPageSlice";

const globalStore = configureStore({
    reducer:{
        category : categoryReducer,
        address :addressReducer,
        user: userReducer,
        gender: useGender,
        article: articleReducer,
        master: masterCategoryReducer,
        clothType: clothiTypeReducer,
        product: productreducer,
        page: pageReducer,
    }
});

export default globalStore;