import React from 'react'
import { Link } from 'react-router-dom'
import OutputCards from '../components/OutputCards'
import moleculeImage from "../assets/images/molTestImage.png"
import StatusTracker from '../components/StatusTracker'

function SingleSmileOutput() {
    return (
        <div>
            <StatusTracker status="result"/>

            {/* This tag has 2 cards defined */}
            <OutputCards 
                predictedValue="69420"
                moleculeImage={moleculeImage}
                molId="CHEMBL397842"
                molName="Undefined"
                molFormula="C16H11NO5S2"
                molWeight="361.40"
                molType="Small Molecule"
            />
        </div>
    )
}

export default SingleSmileOutput;
