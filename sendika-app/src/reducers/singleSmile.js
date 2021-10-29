/***
 * Reducer for storing the data from Chembl Public API 
 * to write the details regarding inserted smile in the Result page
 */

const singleSmile = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_SMILE':
            return action.payload
        case 'CLEAR_SMILE':
            return {}
        default:
            return state
    }
}

export default singleSmile
