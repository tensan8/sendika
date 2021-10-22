import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StatusTracker from '../components/StatusTracker'
import '../assets/css/pages/Loading.scss'
import { Redirect } from 'react-router-dom'
import {getSinglePrediction} from '../actions/model'
import { useHistory } from 'react-router-dom'




function Loading() {
    const chosenData = useSelector(state => state.data)
    const smile = useSelector(state => state.singleSmile)

    const dispatch = useDispatch()

    const resultPrediction = useSelector(state => state.mlModel)
    const [loading, setLoading] = useState(true)

    

    const history = useHistory()

    // console.log(resultPrediction)

    useEffect(() => {
        if (Object.keys(smile).length > 0 && Object.keys(chosenData).length > 0) {
            dispatch(getSinglePrediction(chosenData, smile["molecule_structures"]["canonical_smiles"]))
        }
        // history.push("/SingleSmileOutput")
    }, [chosenData, smile, dispatch])

    useEffect(() => {
        if (Object.keys(resultPrediction).length > 0) {
            setLoading(false)
        }
        else {
            setLoading(true)
        }

    }, [resultPrediction])
    return (
        <div>
            <StatusTracker status="choose model"/>

            {loading &&       
                <>              
                    <div className="bg-white flex w-min m-auto mt-16 space-x-14 py-5 px-14  rounded-full justify-center items-center">
                        <div className="bg-blue-600 p-2 w-7 h-7 rounded-full animate-bounce first-circle"></div>
                        <div className="bg-green-600 p-2 w-7 h-7 rounded-full animate-bounce second-circle"></div>
                        <div className="bg-red-600 p-2 w-7 h-7 rounded-full animate-bounce third-circle"></div>
                    </div>
                    <p className="font-semibold text-white mt-5 text-xl">Processing...</p>
                </>
            }

            {(!loading && chosenData["type"] === "singleSmile") &&
                <Redirect exact to="/SingleSmileOutput"/>
            }

            {(!loading && chosenData["type"] === "csv") &&
                <Redirect exact to="/"/>
            }
        

        </div>
    )
}

export default Loading
