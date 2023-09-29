import {ActionTypes} from '../action/action.types';

const initialState = {
    total: 0,
    currentInput: "",
    operators: ""
};

export const calculateReducer = (state = initialState, action) => {
    const parsedPayload = parseFloat(action.payload);
    const currentInput = isNaN(parsedPayload) ? "" : action.payload;
    const parsedInput = parseFloat(currentInput)
    switch (action.type) {
        case ActionTypes.ADD:
            return {
                ...state,
                total: state.total + parsedInput,
                currentInput: "",
                operators: "+"
            }
        case ActionTypes.SUBTRACT:
            const total = (state.total === 0 ? parsedInput : state.total - parsedInput)
            return {
                ...state,
                total: total,
                currentInput: "",
                operators: "-"
            }
        case ActionTypes.MULTIPLY:
            const total1 = (state.total === 0 ? parsedInput : state.total * parsedInput)
            return {
                ...state,
                total: total1,
                currentInput: "",
                operators: "*"
            }
        case ActionTypes.DIVIDE:
            const total3 = (state.total === 0 ? parsedInput : state.total / parsedInput)
            return {
                ...state,
                total: total3,
                currentInput: "",
                operators: "/"
            }
        case ActionTypes.EQUAL:
            if(state.operators === "+") {
                return {
                    ...state,
                    total: state.total + parsedInput,
                    currentInput: "",
                    operators: ""
                }
            }
        case ActionTypes.ALL_CLEAR:
            return initialState
        default:
            return {
                ...state,
                currentInput
            };
    }
}