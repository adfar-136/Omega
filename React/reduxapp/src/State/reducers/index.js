import { combineReducers } from "redux";
import reducer from "./amountReducer";

const reducers = combineReducers({
    amount: reducer
})
export default reducers