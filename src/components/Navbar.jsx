import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='w-full flex flex-row justify-center items-center gap-4 bg-gray-300'>
                <Link to="/">
                    <p className='p-4 text-black hover:text-blue-400'>Page 1</p>
                </Link>
                <Link to="/page2">
                    <p className='p-4 text-black hover:text-blue-400'>Page 2</p>
                </Link>
            </nav>
        </>
    )
}

export default Navbar