import { DDECREMENT, DINCREMENT } from "./DynamicActionTypes"

export const dincrement = (value) =>{
    return {
        type: DINCREMENT,
        payload : value
    }
}
export const ddecrement = (value) =>{
    return {
        type: DDECREMENT,
        payload : value
    }
}