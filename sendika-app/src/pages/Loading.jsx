import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import StatusTracker from '../components/StatusTracker'
import '../assets/css/pages/Loading.scss'
import { Redirect } from 'react-router-dom'


function Loading() {
    const chosenMethod = useSelector(state => state.data)

    const resultPrediction = useSelector(state => state.mlModel)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!Object.keys(resultPrediction).length === 0) {
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

            {(!loading && chosenMethod === "singleSmile") &&
                <Redirect exact to="/SingleSmileOutput"/>
            }

            {(!loading && chosenMethod === "csv") &&
                <Redirect exact to="/"/>
            }
        

        </div>
    )
}

export default Loading
