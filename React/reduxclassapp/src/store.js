import { createStore } from "redux";
import { countReducer } from "./reducer/countReducer";

const store = createStore(countReducer)
export default store