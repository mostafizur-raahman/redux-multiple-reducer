import { combineReducers } from "redux";
import CounterReducer from "./Counter/CounterReducer";
import { DynamicCounterReducer } from "./DynamicCounter/DynamicCounterReducer";

const rootRedcer = combineReducers({
    counter : CounterReducer,
    dynamicCounter : DynamicCounterReducer
})

export default rootRedcer;