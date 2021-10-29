import React, { useState } from 'react'
import GlassCard from '../components/GlassCard'
import StatusTracker from '../components/StatusTracker'
import StatusSetter from  '../components/StatusSetter'
import { useSelector, useDispatch } from 'react-redux'
import {AddChosenModel} from "../actions/data"

function ChooseModel() {
    const dispatch = useDispatch()
    const [graphConvStatus, setGraphConvStatus] = useState(false);
    const [attentiveStatus, setAttentiveStatus] = useState(false);

    const models = new Map();
    models.set('GraphConvModel', {
        "content": "Using the same concept of convolutional layers that has been used widely in computer vision, the idea of this model is to use the convolutional filter to learn the features of neighboring nodes, then used the knowledge to predict the outputs.",
        "reference": "https://github.com/deepchem/deepchem/blob/master/deepchem/models/graph_models.py#L887-L1015",
        "modelStatus": graphConvStatus
    });
    models.set('Attentive FP', {
        "content": "This model will characterize the atomic local environment by learning the node information from neighboring nodes to more distant ones. It also applies graph attention mechanism.",
        "reference": "https://www.researchgate.net/publication/335156258_Pushing_the_boundaries_of_molecular_representation_for_drug_discovery_with_graph_attention_mechanism",
        "modelStatus": attentiveStatus
    })

    const chosenMethod = useSelector(state => state.data.type)

    const handleCardClick = (modelName) => {
        if(modelName === "GraphConvModel") {
            setGraphConvStatus(true);
            setAttentiveStatus(false);
        } else {
            setAttentiveStatus(true);
            setGraphConvStatus(false);
        }

        dispatch(AddChosenModel(modelName))
    }

    return (
        <div>
            <StatusTracker status="choose model"/>
            <div className="row flex-wrap ">
                {
                    Array.from(models.entries()).map((entry) => {
                        const [key, value] = entry;

                        return (
                            <div key={key} className={`column`}>
                                <div className="w-auto">
                                    <GlassCard 
                                        modelName={key}
                                        content={value["content"]}
                                        reference={value["reference"]}
                                        status={value["modelStatus"]}
                                        handleCardClick={() => handleCardClick(key)}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex-grow flex justify-center items-center">
                <StatusSetter right={graphConvStatus || attentiveStatus} left={true} rightLink="/loading" leftLink="/singleSmile"/>
            </div>
        </div>
    )
}

export default ChooseModel
