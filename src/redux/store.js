import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {pokemonReducer} from "./slices";

const rootReducer = combineReducers({
    pokemonReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};