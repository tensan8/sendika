import React, { useState, useRef } from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/components/DropDown.scss';
import dropDownIcon from "../assets/svg/down_arrow.svg"
import { UseDetectOutsideClick } from './UseDetectOutsideClick';


const DropDown = (props) => {
    const { firstPath, secondPath } = props; //Takes the path for each option
    const dropdownRef = useRef(null); //Will be used to help detecting the click outside of the dropdown
    const [isActive, setIsActive] = UseDetectOutsideClick(dropdownRef, false); //Determine whether the box should be active or not
    const showMenu = () => setIsActive(!isActive); //Toggle the active status of dropdown

    return (
        <div className={"wrapper"}>
            {/* This div will be the one in the nav bar (header) */}
            <div className={"row"} onClick={showMenu}>
                <span className={"navText column"}>Upload</span>
                <img src={dropDownIcon} alt="drop down arrow" className={`column ${isActive ? 'up' : 'down'}`}/>   
            </div>

            {/* This will define the dropdown menu */}
            {/* You can change the path in the navbar file */}
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'} z-50`}>
                <ul>
                    <li><Link to={firstPath} className={"dropDownContent"}>CSV File</Link></li>
                    <li><Link to={secondPath} className={"dropDownContent"}>Single SMILE</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default DropDown;