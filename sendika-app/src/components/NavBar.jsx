import React from 'react'
import {Link} from 'react-router-dom'
import "../assets/css/components/NavBar.scss"
import DropDown from './DropDown';

function NavBar() {  
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
                <tbody>
                    {/* consists of 1 row only */}
                    <tr>
                        <td>
                            <Link to="/" className={"navText"}>Home</Link>
                        </td>
                        <td>
                            <DropDown firstPath="/notFound" secondPath="/singleSmile" />
                        </td>
                        <td>
                            <Link to="/about" className={"navText"}>About</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default NavBar
