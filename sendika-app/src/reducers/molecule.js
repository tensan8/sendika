import React from 'react'

const moleculeReducer = (molecule = {}, action) => {
    switch (action.type) {
        case 'FETCH_MOLECULE':
            return action.payload
        default:
            return molecule
    }
}



export default moleculeReducer
