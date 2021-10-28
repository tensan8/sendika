import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div class="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
            <div class="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
                <div class="w-full mb-16 md:mb-8 text-center lg:text-left">
                    <h1 class="font-light font-roboto text-sendika-text-white text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0">
                        Sorry, this page isn&#x27;t available
                    </h1>
                    <button class="px-2 py-2 w-36 mt-16 font-roboto transition ease-in duration-200 hover:bg-gray-300 border-2 text-lg  bg-sendika-text-white focus:outline-none">
                        <Link to="/">
                            Go back home
                        </Link>
                    </button>
                </div>
                <div class="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
                    <img src="under-construction.svg" alt="SVG for depicting the page is under development"/>
                </div>
            </div>
        </div>
    )
}

export default NotFound
