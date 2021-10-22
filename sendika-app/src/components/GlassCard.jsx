import React, { Component, useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import "../assets/css/components/GlassCard.scss"
import {AddChosenModel} from "../actions/data"
import {useHistory} from 'react-router-dom'

const GlassCard = (props) => {

    const [click, setClick] = useState(false)
    const chosenModel = useSelector(state => state.data.model)

    let temp = ""

    const dispatch = useDispatch()
    const [clicked, setClicked] = useState("")

    

    const history = useHistory()

    // useEffect(() => {
      

    //     if (clicked) {
    //         dispatch(AddChosenModel(clicked))            
    //     } else {
    //         dispatch(AddChosenModel("GraphConvModel"))
    //     }
    
        
        
        
        
        
    // }, [clicked, dispatch])

    // useEffect(() => {
       
    //        dispatch(AddChosenModel(clicked))
      
   
       
   
    // }, [chosenModel, clicked])

    // useEffect(() => {
    //     setClicked("")
    //     // if (chosenModel) {
    //     //     props.modelName === chosenModel ? setClick(true) : setClick(false)
    //     // }
    //     // console.log("once")
    // }, [chosenModel])

    const handleCardClick = (e) => {
        history.push("/loading")
        dispatch(AddChosenModel(props.modelName))
    }

    

    

    return (
        // This class will show one card only (especially for the model card)
        // Please define the value in the ChooseModel.jsx file
        <div onClick={handleCardClick} className={`glass rounded relative`}>
         
            <h1 className=" font-bold text-3xl tracking-wider my-5">{props.modelName}</h1> 
            <p className="">{props.content}</p>

            {/* <p className="flex-shrink-0">Please visit this link for more:</p> */}
            
            <a className="w-full h-10 absolute bottom-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2  rounded inline-flex items-center" 
                href={props.reference} target="_blank" rel="noreferrer">
                    <div className="w-full p-2 h-10 flex items-center">
                        <span className="material-icons">article</span>
                        <span className="text-base ml-5">Documentation</span>
                    </div>
            </a>
        </div>


        // <div className="w-full lg:w1/2 rounded overflow-hidden shadow-lg m-10 relative flex flex-col">
        //     <div className="px-6 py-4 h-full">
        //         <h2 className="font-bold text-xl mb-2">{this.props.modelName}</h2>
        //         <p className="text-gray-700 text-base">{this.props.content}</p>
        //     </div>
        //     <a className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" href={this.props.reference}><span>{this.props.modelName} Documentation</span></a>
        // </div>
    )
    
}

export default GlassCard
   