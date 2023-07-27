import { createStore ,applyMiddleware} from "redux";
import rootRedcer from "./RootRedcer";

const myLogger = (store) => (next) => (action) =>{
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);
    const upcommingState = [action].reduce(rootRedcer,store.getState());
    console.log(`upcomming -> ${JSON.stringify(upcommingState)}`);
    //pass action
    return next(action);
}
export const store = createStore(rootRedcer,applyMiddleware(myLogger));