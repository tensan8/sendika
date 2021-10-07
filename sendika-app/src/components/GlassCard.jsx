import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "../assets/css/components/GlassCard.scss"

class GlassCard extends Component {
    render(){
        return (
            // This class will show one card only (especially for the model card)
            // Please define the value in the ChooseModel.jsx file
            <div className={"glass"}>
                <h1>{this.props.modelName}</h1> 
                <p>{this.props.content}</p>
                <p>Please visit this link for more:</p>
                <a href={this.props.reference}><span>{this.props.modelName} Documentation</span></a>
            </div>
        )
    }   
}

export default GlassCard;
