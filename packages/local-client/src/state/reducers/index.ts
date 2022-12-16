import {combineReducers} from "redux";
import bundlesReducer from "./bundlesReducer";
import cellReducer from "./CellsReducers";


const reducers = combineReducers({
    cells: cellReducer,
    bundles: bundlesReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;