import React, { useEffect, useState } from 'react'
import StatusTracker from '../components/StatusTracker'
import "../assets/css/pages/UploadProcess.scss"
import {ReactComponent as MySvg} from '../assets/svg/upload_svg.svg'
import { Route, useRouteMatch } from 'react-router'
import StatusSetter from '../components/StatusSetter'
import { useDispatch, useSelector  } from 'react-redux';
import {InsertSMILE} from '../actions/singleSmile'
import {AddChosenType} from '../actions/data'
import {clear} from '../actions/model'

function UploadProcess() {
    const match = useRouteMatch()
    // console.log(match)
    const dispatch = useDispatch()
    const [smileState, setSmileState] = useState("")


    const handleInput = (e) => {
        // console.log(e.target.value)
        setSmileState(e.target.value)
    }

    useEffect(() => {
        dispatch(clear())
    }, [])

    useEffect(() => {
        dispatch(InsertSMILE(smileState))
    }, [smileState])

    if (match.path === "/csv") {
        dispatch(AddChosenType("csv"))
    } else {
        dispatch(AddChosenType("singleSmile"))
    }


    return (
        <div className="upload-process-div">
            <StatusTracker status="upload"/>

            {match.path === "/csv" && 
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
            }
            {match.path === "/singleSmile" && 
                <div className="column-input-box">
                    <p>SMILES Name</p>
                    <input onChange={handleInput} className="p-3" type="text"></input>
                </div> 
            }
            
            <StatusSetter right={true} left={true} rightLink="/ChooseModel" leftLink=""/>
        </div>
    )
}

export default UploadProcess
