import { configureStore } from '@reduxjs/toolkit';
import  siteReducer  from "../redux/reducer"

const store=configureStore({
    reducer:siteReducer
});

export default store;