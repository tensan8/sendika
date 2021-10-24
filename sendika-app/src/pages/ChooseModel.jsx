import React, { useState } from 'react'
import GlassCard from '../components/GlassCard'
import StatusTracker from '../components/StatusTracker'
import StatusSetter from  '../components/StatusSetter'
import { useSelector } from 'react-redux'

function ChooseModel() {
    const [models, setModels] = useState([
        {
            "GraphConvModel": {
                "content": "Using the same concept of convolutional layers that has been used widely in computer vision, the idea of this model is to use the convolutional filter to learn the features of neighboring nodes, then used the knowledge to predict the outputs.",
                "reference": "https://github.com/deepchem/deepchem/blob/master/deepchem/models/graph_models.py#L887-L1015",
                "modelStatus": false
            }
        },
        {
            "Attentive FP": {
                "content": "This model will characterize the atomic local environment by learning the node information from neighboring nodes to more distant ones. It also applies graph attention mechanism.",
                "reference": "https://www.researchgate.net/publication/335156258_Pushing_the_boundaries_of_molecular_representation_for_drug_discovery_with_graph_attention_mechanism",
                "modelStatus": false
            }
        }
    ])

    const chosenMethod = useSelector(state => state.data.type)

    const handleCardClick = (modelName) => {
        models.forEach((item, index) => {
            let name = Object.keys(item)[0]
            modelName === name ? item[name]["modelStatus"] = true : item[name]["modelStatus"] = false
        })
    }

    return (
        <div>
            <StatusTracker status="choose model"/>
            <div className="row">
                {
                    models.map((item, index) => {
                        {/* console.log(item[Object.keys(item)[0]]) */}
                        let modelName = Object.keys(item)[0]
                        return (
                            <div onClick={handleCardClick(modelName)} key={index} className={`column`}>
                                <div className="w-auto">
                                    <GlassCard 
                                        modelName={modelName}
                                        content={item[modelName]["content"]}
                                        reference={item[modelName]["reference"]}
                                        status={item[modelName]["modelStatus"]}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            {chosenMethod === "csv" &&
                <StatusSetter right={true} left={true} rightLink="/loading" leftLink="/csv"/>
            }

            {chosenMethod === "singleSmile" &&
                <StatusSetter right={true} left={true} rightLink="/loading" leftLink="/singleSmile"/>
            }
        </div>
    )
}

export default ChooseModel
