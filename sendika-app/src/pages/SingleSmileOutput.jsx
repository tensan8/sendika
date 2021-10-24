import { useHistory } from 'react-router-dom'
import React, { useEffect } from 'react'
import OutputCards from '../components/OutputCards'
import StatusTracker from '../components/StatusTracker'
import { useDispatch, useSelector } from 'react-redux'
import {getMoleculeDetail} from '../actions/molecule'


function SingleSmileOutput() {
    const dispatch = useDispatch()
    const smile = useSelector(state => state.singleSmile)
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
            <OutputCards />  
        </div>
    )
}

export default SingleSmileOutput;
