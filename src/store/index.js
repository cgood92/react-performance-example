import { createStore, combineReducers } from "redux";

import items from "./items";
import selected from "./selected";
import other from "./other";

const rootReducer = combineReducers({ items, selected, other });

export default createStore(rootReducer);
