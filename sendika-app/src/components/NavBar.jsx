import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "../assets/css/components/NavBar.scss"
import DropDown from './DropDown';

function NavBar() {  

    const [opened, setOpened] = useState(false)


    return (
    // The row will make everything to be in the same line
    // <div className={"row"}>
    //     {/* This one is the left column */}
    //     <div className={"column"}>
    //         <Link to="/" className={"navTitle"}>Sendika</Link>
    //     </div>
        
    //     {/* and this one should be the right column */}
    //     <div className={"column"}>
    //         {/* Put the navigation menu inside of table for easier styling */}
    //         <table>
    //             <tbody>
    //                 {/* consists of 1 row only */}
    //                 <tr>
    //                     <td>
    //                         <Link to="/" className={"navText"}>Home</Link>
    //                     </td>
    //                     <td>
    //                         <DropDown firstPath="/notFound" secondPath="/singleSmile" />
    //                     </td>
    //                     <td>
    //                         <Link to="/about" className={"navText"}>About</Link>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     </div>
    // </div>
        <div className="w-full">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8" >
                <div className="flex flex-row items-center justify-between p-4">
                    <Link to="/" className="font-staatliches text-4xl font-semibold tracking-widest text-sendika-text-white uppercase">Sendika</Link>
                    <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpened(!opened)}>
                        <svg fill="#FEFFFF" viewBox="0 0 20 20" class="w-6 h-6">
                            <path className={`${opened ? 'hidden' : 'visible'}`}  fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path className={`${opened ? 'visible' : 'hidden'}`} x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <nav className={`${opened ? 'flex' : 'hidden'} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                    <Link to="/" className="px-4 py-2 mt-2 text-sendika-text-white md:text-base text-sm font-semibold rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Home</Link>
                    <DropDown firstPath="/notFound" secondPath="/singleSmile" />
                    <Link to="/about" className="px-4 py-2 mt-2 text-sendika-text-white md:text-base text-sm font-semibold rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">About</Link>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
