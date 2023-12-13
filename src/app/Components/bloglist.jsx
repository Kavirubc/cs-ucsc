import React from 'react'
import Blogtile from './Molecules/blogtile'

function Bloglist() {
  return (
    <div className='flex flex-col items-center content-center space-y-4'>
     <Blogtile />
          <Blogtile />
          <Blogtile />
          <Blogtile />
    </div>
  )
}

export default Bloglist

