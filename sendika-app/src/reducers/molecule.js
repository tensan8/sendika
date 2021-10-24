/***
 * Storing the received image from the Public Chembl API
 */

const moleculeReducer = (molecule = {}, action) => {
    switch (action.type) {
        case 'FETCH_IMAGE':
            return action.payload
        default:
            return molecule
    }
}

export default moleculeReducer
