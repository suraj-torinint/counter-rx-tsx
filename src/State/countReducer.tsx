export interface stateType {
    counter: number;
}

export interface actionType {
    type: string;
}

const countReducer = (state: stateType = { counter: 0 }, action: actionType) => {
    switch (action.type) {
        case "increment":
            return { counter: state.counter + 1 };
        case "decrement":
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};

export default countReducer;
export type storeType = ReturnType<typeof countReducer>;
