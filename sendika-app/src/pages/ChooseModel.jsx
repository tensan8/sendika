import React from 'react'
import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import StatusTracker from '../components/StatusTracker'

function ChooseModel() {
    return (
        <div>
            <StatusTracker status="choose model"/>
            <div className="row">
            <div className="column">
                <GlassCard 
                    modelName="GraphConvModel" 
                    content="
                            Using the same concept of convolutional layers that has been used widely in computer vision, 
                            the idea of this model is to use the convolutional filter to learn the features of neighboring nodes, 
                            then used the knowledge to predict the outputs.
                            "
                    reference="https://github.com/deepchem/deepchem/blob/master/deepchem/models/graph_models.py#L887-L1015"
                />
            </div>

            <div className="column">
                <GlassCard 
                    modelName="Attentive FP"
                    content="
                            This model will characterize the atomic local environment by learning the node information 
                            from neighboring nodes to more distant ones. It also applies graph attention mechanism.
                            "
                    reference="https://www.researchgate.net/publication/335156258_Pushing_the_boundaries_of_molecular_representation_for_drug_discovery_with_graph_attention_mechanism"
                />
            </div>
        </div>
        </div>
    )
}

export default ChooseModel
