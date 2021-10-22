import * as api from '../api/index.js';

export const getResult = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();

        dispatch({type: 'FETCH_ALL', payload: data});

    } catch (error) {
        console.log(error.message)
    }
};

export const getSinglePrediction = (datas, smile) => async (dispatch) => {
    try {
        const data = await api.getSinglePrediction(datas, smile)

        dispatch({type: 'GET_SINGLE_PREDICTION', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}