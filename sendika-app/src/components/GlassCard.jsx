import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "../assets/css/components/GlassCard.scss"
import {useHistory} from 'react-router-dom'

const GlassCard = (props) => {

    return (
        // This class will show one card only (especially for the model card)
        // Please define the value in the ChooseModel.jsx file
        <div onClick={props.handleCardClick} className={`glass overflow-hidden rounded relative ` + (props.status ? `focusCard` : null)}>
            <h1 className="font-bold text-3xl tracking-wider my-5">{props.modelName}</h1> 
            <p className="">{props.content}</p>
            
            <a className="w-full h-10 absolute bottom-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2  rounded inline-flex items-center" 
                href={props.reference} target="_blank" rel="noreferrer">
                    <div className="w-full p-2 h-10 flex items-center">
                        <span className="material-icons">article</span>
                        <span className="text-base ml-5">Documentation</span>
                    </div>
            </a>
        </div>
    )
    
}

export default GlassCard
   