/***
 * Reducer for storing 
 * 1. Chosen category for upload process whether CSV or Single Smile
 * 2. Chosen model for the prediction
 */

const data = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CHOSEN_TYPE':
            return {
                ...state,
                type: action.payload
            }
        case 'ADD_CHOSEN_MODEL':
            return {
                ...state,
                model: action.payload
            }
        case 'CLEAR_DATA':
            return {}
        default:
            return state
    }
}

export default data
