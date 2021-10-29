import * as api from '../api/index.js';

export const getMoleculeDetail = (temp) => async (dispatch) => {
    try {
        const data = await api.getMoleculeImage(temp);
        
        dispatch({type: 'FETCH_IMAGE', payload: data})
    } catch (error) {
        console.log(`ACTION Side: ${error}`)
    }
}

export const ClearImage = () => {
    return ({type: 'CLEAR_IMAGE'})
}