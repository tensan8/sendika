import {Link} from 'react-router-dom';
import '../assets/css/components/DropDown.scss';
import { UseDetectOutsideClick } from './UseDetectOutsideClick';
import React, { useRef } from 'react';


const DropDown = (props) => {
    const { firstPath, secondPath } = props; //Takes the path for each option
    const dropdownRef = useRef(null); //Will be used to help detecting the click outside of the dropdown
    const [isActive, setIsActive] = UseDetectOutsideClick(dropdownRef, false); //Determine whether the box should be active or not
    const showMenu = () => {setIsActive(!isActive)}//Toggle the active status of dropdown

    return (
        <div className="relative">
            {/* This div will be the one in the nav bar (header) */}
            {/* <div className={"row"} onClick={showMenu}>
                <span className={"navText column"}>Upload</span>
                <img src={dropDownIcon} alt="drop down arrow" className={`column ${isActive ? 'up' : 'down'}`}/>   
            </div> */}

            <button className="flex flex-row justify-center items-center md:text-base text-sm text-sendika-text-white w-full px-4 py-2 mt-2 font-semibold text-center bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={showMenu}>
                <span>Upload</span>
                <svg fill="#FEFFFF" viewBox="0 0 20 20" className={`${isActive ? 'rotate-180' : 'rotate-0'} inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1`}>
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>

                {/* <img src={dropDownIcon} alt="drop down arrow" className={`column ${isActive ? 'up' : 'down'}`}/>    */}
            </button>

            {/* This will define the dropdown menu */}
            {/* You can change the path in the navbar file */}
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'} z-50 absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48`}>
                <div className="px-2 py-2 bg-white rounded-md shadow">
                    <Link to={firstPath} className={"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"}>CSV File</Link>
                    <Link to={secondPath} className={" block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"}>Single SMILE</Link>
                </div>
            </nav>
        </div>
    )
}

export default DropDown;