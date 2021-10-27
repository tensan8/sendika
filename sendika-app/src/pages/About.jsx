import React from 'react'
import '../assets/css/pages/About.scss';
import teamImg from '../assets/images/about.png';

function About() {
    return (
        <div className={"mainPart"}>
            <div className={"row"}>
                {/* Text */}
                <div className={"left column"}>
                    <h1>Let's Meet The Team</h1>
                    <p>
                        &apos;pIC50 Hunters&apos; is the name of the team that was made by Alesandro and Bryan under the supervision of Dr. Lee Sue Han, Dr. Xavier Wezen Chee, and Dr. Joel Chia Ming Than.
                        <br/><br/>Participating in their first competition in making innovation by using Data, Alesandro and Bryan have decided to make an AI model by utilizing the SMILES dataset. 
                        This project was made as one of the deliverables that this team will use to show the innovation in a website integrated with Artificial Intelligence.
                        <br/><br/>Sendika will help researchers to predict the pIC50 value of a compound; 
                        hence they can cut the time that they should spend in order to test whether a particular compound can be an inhibitor or not by having a prior prediction on how possible the compound will be an inhibitor, predicted by the AI.
                    </p>
                </div>

                {/* Image */}
                <div className={"right column"}>
                    <img src={teamImg} alt="Team picture"></img>
                </div>
            </div>
            
        </div>
    )
}

export default About
