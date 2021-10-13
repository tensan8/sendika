import React from 'react'
import {ReactComponent as RightSVG} from '../assets/svg/right_arrow.svg'
import {ReactComponent as LeftSVG} from '../assets/svg/left_arrow.svg'
import {Link} from 'react-router-dom'

import '../assets/css/components/StatusSetter.scss'


function StatusSetter(props) {
    const {right, left, rightLink, leftLink} = props


    return (
        <div class="status-setter">
            {left && 
                <div class="">
                    <Link to={leftLink} style={{textDecoration: "none", alignSelf: 'self-end'}}>Prev <LeftSVG/></Link>
                </div>
            }
            {right && 
                <div class="right-div">
                    <Link to={rightLink} style={{textDecoration: "none", alignSelf: 'self-end', textAlign: right}}>Next <RightSVG/></Link>
                </div>
            }
        </div>

    )
}

export default StatusSetter
