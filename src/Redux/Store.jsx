import { createStore } from "redux";
import rootRedcer from "./RootRedcer";


export const store = createStore(rootRedcer);