import { configureStore } from "@reduxjs/toolkit";
import { persistMiddlware } from "./middlewares/persist-middleware";



import reducers from "./reducers";


export const store = configureStore({ 
    reducer: reducers, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistMiddlware),});






    
export type AppDispatch = typeof store.dispatch





