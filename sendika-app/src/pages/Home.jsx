import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {getResult} from '../actions/model'
import {getMoleculeDetail} from '../actions/molecule'
import { useDispatch, useSelector  } from 'react-redux';


function Home() {
    const moleculeChembl = useSelector((state) => state.chembl)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getMoleculeDetail("CHEMBL2106510"))
    // });

    return (
        <div>
            {moleculeChembl.pref_name}
        </div>
    )
}

export default Home
