import React, { useState } from 'react'

import '../assets/css/components/StatusTracker.scss'

function StatusTracker(props) {
    const [availableStatus, setStatus] = useState({
        status_upload: "upload",
        status_choose_model: "choose model",
        status_result: "result"
    })
    const [currStatus, setCurrStatus] = useState(props.status)

    return (
        <div className="flex justify-center items-center align-middle text-center">
            <svg className="relative h-full w-full transform -translate-x-3/4 left-3/4" viewBox="-165 0 1000 90" fill="none">
                <circle className={`${(currStatus === availableStatus.status_upload) ? 'active-progress' : 'inactive-progress'}`} cx="18" cy="18" r="15.5"/>
                <circle className={`${currStatus === availableStatus.status_result ? 'active-progress' : ''}`} cx="658" cy="18" r="15.5"/>
                <circle className={`${currStatus === availableStatus.status_choose_model ? 'active-progress' : ''} ${currStatus === availableStatus.status_result ? 'inactive-progress' : ''}`} cx="338" cy="18" r="15.5"/>
                <line className={`${currStatus !== availableStatus.status_upload ? 'inactive-progress' : ''}`} x1="36" y1="17.5" x2="320" y2="17.5"/>
                <line className={`${currStatus === availableStatus.status_result ? 'inactive-progress' : ''}`} x1="356" y1="17.5" x2="640" y2="17.5"/>
                <text className={`${currStatus !== availableStatus.status_upload ? 'inactive-text' : ''}`} x="-18" y="60">Upload</text>
                <text className={`${currStatus === availableStatus.status_result ? 'inactive-text' : ''}`} x="270" y="60">Choose Model</text>
                <text x="625" y="60">Result</text>
            </svg>
        </div>

    )
}

export default StatusTracker
