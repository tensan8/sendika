/***
 * Reducer for storing the prediction result received from backend
 */

const model = (state = {}, action) => {
    switch (action.type) {
        // Getting single prediction result
        case 'GET_SINGLE_PREDICTION':
            return action.payload["data"]
        // Clearing the state for this reducer so the loading page will work
        case 'CLEAR_PREDICTION':
            return {}
        default:
            return state
    }
}

export default model
