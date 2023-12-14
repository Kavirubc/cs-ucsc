import React from 'react';
import Blogtile from './Molecules/blogtile';
import { blogs } from './Data';

function Bloglist() {
  return (
    <div className='flex flex-col items-center group '>
      {blogs.map((blog,id) => (
        <div key={id} className='group-hover:scale-[0.95] group-hover:hover:scale-105 transition duration-200 ease-in-out'>
          <Blogtile
            title={blog.title}
            desc={blog.desc}
            writer={blog.writer}
            date={blog.date}
            tag1={blog.tag1}
            tag2={blog.tag2}
          />
        </div>
      ))}
    </div>
  );
}



export default Bloglist;
