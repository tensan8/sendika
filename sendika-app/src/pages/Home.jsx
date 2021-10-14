import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {getResult} from '../actions/model'
import { useDispatch } from 'react-redux';


function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getResult())
    });

    return (
        <div>
            
        </div>
    )
}

export default Home
