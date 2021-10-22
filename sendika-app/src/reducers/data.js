import React from 'react'

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
        default:
            return state
    }
}

export default data
