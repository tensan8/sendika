import * as api from '../api/index.js';

export const getMoleculeDetail = (temp) => async (dispatch) => {
    try {
        const data = await api.getMolecule(temp);
        
        dispatch({type: 'FETCH_MOLECULE', payload: data})
    } catch (error) {
        console.log(`ACTION Side: ${error}`)
    }
}