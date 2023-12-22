'use client'
import React, { useEffect, useState } from 'react';
import Blogtile from './Molecules/blogtile';
import Link from 'next/link';
import { blogsAll } from './Data';

async function getBlogs() {
  try {
    const res = await fetch('http://127.0.0.1:8090/api/collections/blogsMain/records?page=1&perPage=30');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data?.items ?? [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}

export default function BloglistAll() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBlogs()
      .then(blogs => setBlogs(blogs))
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <div>Error loading blogs: {error}</div>;
  }

  return (
    <div className='flex flex-col items-center group'>
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.title}`}>
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
