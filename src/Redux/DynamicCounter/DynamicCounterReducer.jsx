import { DDECREMENT, DINCREMENT } from "./DynamicActionTypes";

const initialState ={
    value : 0
}
export const DynamicCounterReducer =(state = initialState ,action) =>{
    switch (action.type) {
        case DINCREMENT:
            return{
                ...state,
                value : state.value + action.payload,
            }
        case DDECREMENT:
            return{
                ...state,
                value: state.value - action.payload,
            }
    
        default:
            return state;
    }
}