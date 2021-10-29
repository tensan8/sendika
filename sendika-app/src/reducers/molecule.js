/***
 * Storing the received image from the Public Chembl API
 */

const moleculeReducer = (molecule = {}, action) => {
    switch (action.type) {
        case 'FETCH_IMAGE':
            return action.payload
        case 'CLEAR_IMAGE':
            return {}
        default:
            return molecule
    }
}

export default moleculeReducer
