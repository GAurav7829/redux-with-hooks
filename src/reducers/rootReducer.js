const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return {
            counter: state.counter + 1
        }
        case "DECREMENT": return {
            counter: state.counter - 1
        }
        case "ADD5": return {
            counter: state.counter + action.data
        }
        case "SUB5": return {
            counter: state.counter - action.data
        }
        default: return state;
    }
}

export default rootReducer;