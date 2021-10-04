import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "../assets/css/components/GlassCard.scss"

class GlassCard extends Component {
    render(){
        return (
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
