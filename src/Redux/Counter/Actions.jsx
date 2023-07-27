import { DECREMENT, INCREMENT } from "./ActionsType";

export const increment = () => {
    return {
        type: INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: DECREMENT,
    };
};
