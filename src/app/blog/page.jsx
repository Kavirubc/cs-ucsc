import React from 'react'
import Navbar from '../Components/Molecules/navbar'

import BloglistAll from '../Components/bloglist1'

function page() {
    return (
        <>
            <Navbar />
            <div className='mt-[120px]' style={{ minHeight: 'calc(100vh - 100px)' }}>
                This is contains all the blogs
                <div>
                    <BloglistAll />
                </div>
            </div>
        </>
    )
}

export default page
