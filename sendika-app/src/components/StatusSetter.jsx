import React, { useEffect, useState } from 'react'
import {ReactComponent as RightSVG} from '../assets/svg/right_arrow.svg'
import {ReactComponent as LeftSVG} from '../assets/svg/left_arrow.svg'
import {Link, useHistory} from 'react-router-dom'

import '../assets/css/components/StatusSetter.scss'
import { useSelector } from 'react-redux'


function StatusSetter(props) {
    const { right, left, rightLink, leftLink} = props
    const history = useHistory()

    const data = useSelector(state => state.singleSmile)

    const [show, setShow] = useState(props.valid)
    const [clicked, setClicked] = useState(false)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        if (data === "Not found") {
            setNotFound(true)
        } else if (Object.keys(data).length > 1) {
            setNotFound(false)
        }
    }, [data])


    const handleOnClick = () => {
        if (history.location.pathname === "/singleSmile") {
            if (props.valid && !notFound) {
                history.push(rightLink)
            }
            else if (!props.valid || notFound) {
                setShow(props.valid)
                setClicked(true)
            }
        }    
        else {
            history.push(rightLink)
        }    
    }

    return (
        <div className="flex flex-grow justify-between">

            <div className={`${((!show && clicked) || (notFound && clicked)) ? 'visible' : 'hidden'} bg-red-600 absolute top-0 right-0 left-0 z-50`}>
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                            <span className="flex p-2 rounded-lg bg-pink-800 dark:bg-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="h-6 w-6 text-white" viewBox="0 0 1792 1792">
                                    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z">
                                    </path>
                                </svg>
                            </span>
                            <p className="ml-3 font-medium text-white truncate">                                    
                                <span>The SMILES is not valid</span>
                            </p>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button type="button" onClick={() => { setClicked(!clicked) }} className="-mr-1 flex p-2 rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-6 w-6 text-white" viewBox="0 0 1792 1792">
                                    <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`left ? "visible" : "invisible" ml-6 self-start text-left`}>
                {left ?
                    <Link className="flex items-center transition duration-500 ease-in-out transform hover:scale-110" to={leftLink}>
                        <div className="inline-block text-white"><LeftSVG /></div>
                        <span className="inline-block text-white text-4xl pl-4" style={{ fontFamily: "Staatliches" }}>Prev</span>
                    </Link>
                    :
                    null
                }
            </div>
            <div className={`(right ? "visible" : "invisible") mr-6 self-end text-right`}>
                <div onClick={handleOnClick} className="flex cursor-pointer items-center transition duration-500 ease-in-out transform hover:scale-110">
                    <span className="text-white text-4xl pr-4 font-staatliches">Next</span>
                    <div className="">
                        <RightSVG />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusSetter
