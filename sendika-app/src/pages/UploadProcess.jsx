import React, { useEffect, useState, } from 'react'
import StatusTracker from '../components/StatusTracker'
import "../assets/css/pages/UploadProcess.scss"
import { useRouteMatch } from 'react-router'
import StatusSetter from '../components/StatusSetter'
import { useDispatch, useSelector } from 'react-redux'
import {InsertSMILE} from '../actions/singleSmile'
import {AddChosenType, ClearData} from '../actions/data'
import {clear} from '../actions/model'
import {ClearImage} from '../actions/molecule'
import {ClearSmile} from '../actions/singleSmile'



function UploadProcess() {
    const match = useRouteMatch()
    const dispatch = useDispatch()
    const [smileState, setSmileState] = useState("")
    const [moreThan5, setMore] = useState(false)
    
    const data = useSelector(state => state.singleSmile)

    

    const handleInput = (e) => {
        setSmileState(e.target.value)
    }

    // const validateSMILE = async (input) => {
    //     const response = await ValidateSMILE(input)
    //     console.log(response)
    // }

    useEffect(() => {
        dispatch(clear())
        dispatch(ClearData())
        dispatch(ClearImage())
        dispatch(ClearSmile())
    }, [])

    useEffect(() => {
        if (smileState) {
            
            if (smileState.trim().length > 5) {
                dispatch(InsertSMILE(smileState))
                setMore(true)
            } else {
                setMore(false)
            }
        }
        // if (smileState.trim() !== "") {
        //     console.log("in")
        //     dispatch(InsertSMILE(smileState))
        //     // setMore(true)
        //     // validateSMILE(smileState)
        // }
    }, [smileState, dispatch])

    if (match.path === "/csv") {
        dispatch(AddChosenType("csv"))
    } else {
        dispatch(AddChosenType("singleSmile"))
    }


    return (
        <div className="flex flex-col h-screen">
            <StatusTracker status="upload"/>

            {/* {match.path === "/csv" && 
                <>
                    <div className="upload-box">
                        <MySvg />
                    </div>
                    <p>Click the box & upload your CSV file here</p>

                    <div className="column-input-box">
                        <p>SMILES Column Name</p>
                        <input className="p-3" type="text"></input>
                    </div>
                </>
            } */}
            <div className="container flex flex-col mx-auto items-center">
            {match.path === "/singleSmile" && 
                <div className="w-full max-w-md">
                    <p className="text-left text-sendika-text-white">SMILES</p>
                    <input onChange={handleInput} className="p-3 h-3/5 border-none bg-sendika-text-white rounded-md w-full mx-auto focus:outline-none focus:bg-gray-100" type="text"></input>
                </div>
                   
            }
            </div>
            <div className="flex-grow flex justify-center items-center">
                <StatusSetter right={smileState.trim() ? true : false} left={false} rightLink="/ChooseModel" leftLink="" valid={moreThan5}/> 
            </div>
        </div>
    )
}

export default UploadProcess
