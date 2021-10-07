import React, { Component } from 'react'
import "../assets/css/components/OutputCards.scss"

//This class should receive the value only, the extraction from the model or backend will need to be integrated
//either here too or can just pass through paramaters for neater result
class OutputCards extends Component {
    render(){
        return (
        <div className={"container"}>
            {/* The top card, it will take the predicted pIC50 so make sure we pass it here */}
            <div className={"cards"}>
                <h2>{this.props.predictedValue}</h2>
                <h3>pIC50</h3>
            </div>

            {/* The bottom card */}
            <div className={"cards"}>
                <h1 className="nameClassTitle">NAME AND CLASSIFICATION</h1>
                <table>
                    <tr>
                        <td>
                            {/* take the image path to the tag properties */}
                            <img src={this.props.moleculeImage} alt="molecule image" />
                        </td>
                        <td>
                            {/* take the information about the molecule through the parameter */}
                            <p><strong>ID:</strong> {this.props.molId}</p>
                            <p><strong>Name:</strong> {this.props.molName}Undefined</p>
                            <p><strong>Molecular Formula:</strong> {this.props.molFormula}</p>
                            <p><strong>Molecular Weight:</strong> {this.props.molWeight}</p>
                            <p><strong>Molecule Type:</strong> {this.props.molType}</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        )
    }   
}

export default OutputCards;
