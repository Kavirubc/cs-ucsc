import React from 'react';
import Blogtile from './Molecules/blogtile';
import { blogs } from './Data';
import Link from 'next/link';

function Bloglist() {
  return (
    <div className='flex flex-col items-center group'>
      {blogs.map((blog,id) => (
        <Link key={id} href={`/blog/${blog.title}`}>
          <div className='group-hover:scale-[1] group-hover:hover:scale-105 transition duration-200 ease-in-out'>
            <Blogtile
              title={blog.title}
              desc={blog.desc}
              writer={blog.writer}
              date={blog.date}
              tag1={blog.tag1}
              tag2={blog.tag2}
              backImg={blog.backImg}
              writeImg={blog.writeImg}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}



export default Bloglist;
