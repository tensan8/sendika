import React from 'react'

const singleSmile = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_SMILE':
            return action.payload
        default:
            return state
    }
}

export default singleSmile
