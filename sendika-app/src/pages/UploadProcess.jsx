import React from 'react'
import StatusTracker from '../components/StatusTracker'
import "../assets/css/pages/UploadProcess.scss"
import {ReactComponent as MySvg} from '../assets/svg/upload_svg.svg'
import { Route, useRouteMatch } from 'react-router'
import StatusSetter from '../components/StatusSetter'


function UploadProcess() {
    const match = useRouteMatch()
    console.log(match)
    return (
        <div className="upload-process-div">
            <StatusTracker status="upload"/>

            {match.path === "/csv" && 
                <>
                    <div className="upload-box">
                        <MySvg />
                    </div>
                    <p>Click the box & upload your CSV file here</p>
                </>
            }
              
            <div className="column-input-box">
                <p>SMILES Column Name</p>
                <input type="text"></input>
            </div>
            <StatusSetter right={true} left={false} rightLink="/ChooseModel" leftLink=""/>
        </div>
    )
}

export default UploadProcess
