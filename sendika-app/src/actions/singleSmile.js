import * as api from '../api/index';

export const InsertSMILE = (e) => async (dispatch) => {
    try {
        const data = await api.getChemblID(e)

        let newData = {
            ...e,
            ...data["data"]["molecules"][0]
        }

        dispatch ({type: 'ADD_SMILE', payload: newData})
    } catch (error) {
        console.log(`ACTION Side: ${error}`)
    }
}


