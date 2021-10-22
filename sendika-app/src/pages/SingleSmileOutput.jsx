import { useHistory } from 'react-router-dom'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import OutputCards from '../components/OutputCards'
import moleculeImage from "../assets/images/molTestImage.png"
import StatusTracker from '../components/StatusTracker'
import { useDispatch, useSelector } from 'react-redux'
import {getMoleculeDetail} from '../actions/molecule'
import SVG from 'react-inlinesvg'


function SingleSmileOutput() {
    const dispatch = useDispatch()
    const result = useSelector(state => state.mlModel)
    const smile = useSelector(state => state.singleSmile)
    const image = useSelector(state => state.chembl)


    const history = useHistory()

   
    useEffect(() => {
        if (Object.keys(smile).length > 0) {
            dispatch(getMoleculeDetail(smile["molecule_chembl_id"]))
        } else {
            history.push("/")
        }
    })




   


    return (
        <div>
            <StatusTracker status="result"/>

            {/* This tag has 2 cards defined */}
                <OutputCards />  

                {/* <OutputCards 
                predictedValue={result}
                moleculeImage={image}
                molId={smile["molecule_chembl_id"]}
                molName={smile["molecule_structures"]["pref_name"] !== null ? smile["molecule_structures"]["pref_name"] : "Undefined"}
                molFormula={smile["molecule_properties"]["full_molformula"]}
                molWeight={smile["molecule_properties"]["full_mwt"]}
                molType={smile["molecule_properties"]["molecule_type"]}
                />   */}
        </div>
    )
}

export default SingleSmileOutput;
