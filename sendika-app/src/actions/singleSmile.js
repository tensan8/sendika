import * as api from '../api/index';

export const InsertSMILE = (e) => async (dispatch) => {
    try {
        const data = await api.GetMoleculeData(e)

        // let newData = {
        //     ...e,
        //     ...data["data"]["molecules"][0]
        // }
        if (data === undefined) {
            dispatch ({type: 'ADD_SMILE', payload: "Not found"})
        } else {
            console.log("singleSmile: " + data)
            dispatch ({type: 'ADD_SMILE', payload: data["data"]["molecules"][0]})
        }
        
    } catch (error) {
        console.log(`ACTION Side: ${error}`)
    }
}

export const ClearSmile = () => {
    return ({type: 'CLEAR_SMILE '})
}


