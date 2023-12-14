import React from 'react'
import Navbar from '../Components/Molecules/navbar'

function page() {
    return (
        <>
        <Navbar />
        <div style={{ minHeight: 'calc(100vh - 100px)' }}>
            This is about us page
        </div>
        </>
    )
}

export default page
