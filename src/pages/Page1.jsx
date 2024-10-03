import React from 'react'
import Navbar from './../components/Navbar';
import { Helmet } from 'react-helmet';

function Page1() {
    return (
        <>
            <Helmet>
                <title>Page 1 - My Simple App</title>
                <meta name="description" content="This is Page 1 of the simple app." />
            </Helmet>
            <div className='flex flex-col h-screen'>
                <Navbar />
                <div className='w-full flex grow bg-blue-400 justify-center items-center text-4xl'>Welcome to Page 1</div>
            </div>

        </>
    )
}

export default Page1