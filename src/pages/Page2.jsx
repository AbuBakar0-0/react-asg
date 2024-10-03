import React from 'react'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet'

function Page2() {
    return (
        <>
            <Helmet>
                <title>Page 2 - My Simple App</title>
                <meta name="description" content="This is Page 2 of the simple app." />
            </Helmet>
            <div className='flex flex-col h-screen'>
                <Navbar />
                <div className='w-full flex grow bg-green-400 justify-center items-center text-4xl'>Welcome to Page 2</div>
            </div>
        </>
    )
}

export default Page2