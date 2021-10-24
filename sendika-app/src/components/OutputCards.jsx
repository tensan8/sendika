import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import "../assets/css/components/OutputCards.scss"
import SVG from 'react-inlinesvg'
import { useHistory } from 'react-router-dom'

//This class should receive the value only, the extraction from the model or backend will need to be integrated
//either here too or can just pass through paramaters for neater result
const OutputCards = (props) => {
    const result = useSelector(state => state.mlModel)
    const smile = useSelector(state => state.singleSmile)
    const image = useSelector(state => state.chembl)

    console.log(smile)
    const history = useHistory()

    useEffect(() => {
        if (Object.keys(result).length === 0 && Object.keys(smile).length === 0 && Object.keys(image).length === 0 ) {
            history.push("/")
        }
    })

    return (
        <div className={"container"}>
            {/* The top card, it will take the predicted pIC50 so make sure we pass it here */}
            <div className={"cards"}>
                <h2>{result["predicted_pIC50"]}</h2>
                <h3>pIC50</h3>
            </div>

            {/* The bottom card */}
            <div className={"cards"}>
                <h1 className="nameClassTitle">NAME AND CLASSIFICATION</h1>
                <table>
                    <tr>
                        <td>
                            {/* take the image path to the tag properties */}
                            <SVG src={image["data"]}/>
                        </td>
                        <td>
                            {/* take the information about the molecule through the parameter */}
                            <p><strong>ID: </strong> {smile["molecule_chembl_id"]}</p>
                            <p><strong>Name: </strong>{smile["pref_name"] ? smile["pref_name"] : "Undefined"}</p>
                            <p><strong>Molecular Formula: </strong> {smile["molecule_properties"]["full_molformula"]}</p>
                            <p><strong>Molecular Weight: </strong> {smile["molecule_properties"]["full_mwt"]}</p>
                            <p><strong>Molecule Type: </strong> {smile["molecule_type"]}</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default OutputCards



