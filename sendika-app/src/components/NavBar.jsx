import React from 'react'
import {Link} from 'react-router-dom'
import "../assets/css/components/NavBar.scss"

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
                {/* consists of 1 row only */}
                <tr>
                    <td>
                        <Link to="/" className={"navText"}>Home</Link>
                    </td>
                    <td>
                        <Link to="/upload" className={"navText"}>Upload</Link>
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
