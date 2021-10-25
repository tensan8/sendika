import React from 'react'
import {ReactComponent as RightSVG} from '../assets/svg/right_arrow.svg'
import {ReactComponent as LeftSVG} from '../assets/svg/left_arrow.svg'
import {Link} from 'react-router-dom'

import '../assets/css/components/StatusSetter.scss'


function StatusSetter(props) {
    const {right, left, rightLink, leftLink} = props

    return (
        <div className="flex justify-between">      
            <div className={`left ? "visible" : "invisible" ml-6`}>
                {left ? 
                    <Link className="flex items-center" to={leftLink}><div className="inline-block text-white"><LeftSVG/></div> <span className="inline-block text-white text-4xl pl-4" style={{fontFamily: "Staatliches"}}>Prev</span></Link>   
                : 
                    null
                }
            </div>
            <div className={`(right ? "visible" : "invisible") mr-6`}> 
                <Link className="flex items-center" to={right ? rightLink : window.location.pathname}><span className="text-white text-4xl pr-4" style={{fontFamily: "Staatliches"}}>Next</span> <div className="inline-block"><RightSVG/></div></Link>   
            </div>
        </div>
    )
}

export default StatusSetter
