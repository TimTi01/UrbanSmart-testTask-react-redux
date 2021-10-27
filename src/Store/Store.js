import {createStore, combineReducers} from "@reduxjs/toolkit";
import {formReducer} from "./formReducer";
import {buttonReducer} from "./buttonReducer";

const rootReducer = combineReducers({
    form: formReducer,
    button: buttonReducer,
})

export const store = createStore(rootReducer)