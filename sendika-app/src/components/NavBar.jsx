import React from 'react'
import {Link} from 'react-router-dom'
import "../assets/css/components/NavBar.scss"

function NavBar() {
    return (
    <div className={"row"}>
        <div className={"column"}>
            <Link to="/" className={"navTitle"}>Sendika</Link>
        </div>
        
        <div className={"column"}>
            <table>
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
