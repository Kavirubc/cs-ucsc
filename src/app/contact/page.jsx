import React from 'react'
import Navbar from '../Components/Molecules/navbar'

function page() {
    return (
        <>
        <Navbar />
        <div style={{ minHeight: 'calc(100vh - 100px)' }}>
            This is contact us page
        </div>
        </>
    )
}

export default page
