export const AddChosenType = (data) => {
    return ({type: 'ADD_CHOSEN_TYPE', payload: data})
}

export const AddChosenModel = (data) => {
    return ({type: 'ADD_CHOSEN_MODEL', payload: data})
}

export const ClearData = () => {
    return({type: 'CLEAR_DATA'})
}
