import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "../assets/css/components/NavBar.scss"
import dropDownIcon from "../assets/svg/down_arrow.svg"
import DropDown from './DropDown';

function NavBar() {
    const [isShowingMenu, setShowMenu] = useState(false);

    const showMenu = (e) => {
        e.preventDefault();
        setShowMenu(!isShowingMenu);
    }
    
    return (
    // The row will make everything to be in the same line
    <div className={"row"}>
        {/* This one is the left column */}
        <div className={"column"}>
            <Link to="/" className={"navTitle"}>Sendika</Link>
        </div>
        
        {/* and this one should be the right column */}
        <div className={"column"}>
            {/* Put the navigation menu inside of table for easier styling */}
            <table>
                {/* consists of 1 row only */}
                <tr>
                    <td>
                        <Link to="/" className={"navText"}>Home</Link>
                    </td>
                    <td>

                        {/* Please change the path here */}
                        <DropDown firstPath="/csv" secondPath="/singleSmile" />
                        
                    </td>
                    <td>
                        <Link to="/about" className={"navText"}>About</Link>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    )
}

export default NavBar
