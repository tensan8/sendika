import React from 'react'

const model = (model = {}, action) => {
    switch (action.type) {
        case 'FETCH_ALL': 
            return action.payload;

        default:
            return "nothing"
    }
}

export default model
