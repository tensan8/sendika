import axios from 'axios';

const url = 'http://127.0.0.1:8000/model/';
const chemblURL = 'https://www.ebi.ac.uk/chembl/api/data'

export const fetchPosts = () => axios.get(url);
export const predictSingleSmile = (smile) => axios.post(`${url}/predict-single-smile/`, smile)

// const temp = "CHEMBL557046"
// c1ncccc1

// console.log(chemblURL)
const getMoleculeDetail = (temp) => axios.get(`${chemblURL}/molecule/${temp}`)
const getMoleculeImage = (temp) => axios.get(`${chemblURL}/image/${temp}`)


export const getMolecule = async (temp) => {
    try {
        const responses = await axios.all([getMoleculeDetail(temp), getMoleculeImage(temp)])
        return responses
    } catch (error) {
        console.log(`API Side: ${error}`)
        return error
    }
}

export const getChemblID = async (data) => {
    try {
        const response = await axios.get(`${chemblURL}/molecule`, {params: {
            molecule_structures_canonical_smiles_flexmatch: data
        }})
        // console.log("here" + response)
        return response
    } catch (error) {
        console.log(`API Side: ${error}`)
    }
}


