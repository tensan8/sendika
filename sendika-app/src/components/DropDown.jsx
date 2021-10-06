import React, { useState, useRef } from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/components/DropDown.scss';
import dropDownIcon from "../assets/svg/down_arrow.svg"
import { UseDetectOutsideClick } from './UseDetectOutsideClick';


const DropDown = (props) => {
    const { firstPath, secondPath } = props;
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = UseDetectOutsideClick(dropdownRef, false);
    const showMenu = () => setIsActive(!isActive);

    return (
        <div className={"wrapper"}>
            <div className={"row"} onClick={showMenu}>
                <span className={"navText column"}>Upload</span>
                <img src={dropDownIcon} alt="drop down arrow" className={`column ${isActive ? 'up' : 'down'}`}/>   
            </div>

            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><Link to={firstPath} className={"dropDownContent"}>CSV File</Link></li>
                    <li><Link to={secondPath} className={"dropDownContent"}>Single SMILE</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default DropDown;