import React from 'react';
import { blogsAll } from '@/app/Components/Data';
import Navbar from '@/app/Components/Molecules/navbar';

export default function Page({ params }) {
    const decodedTitle = decodeURIComponent(params.slug);

    // Find the blog post that matches the decoded title
    const blogPost = blogsAll.find(blog => blog.title === decodedTitle);

    // Check if a matching blog post was found
    if (!blogPost) {
        // Handle the case where no matching blog post was found, e.g., display an error message or redirect to a 404 page.
        return <div>Blog post not found</div>;
    }

    return (
        <>
            <Navbar />
            <div className=" min-h-screen">
                <div className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={blogPost.backImg} // Use the backImg URL from params
                            alt="Blog Cover"
                            className="w-full h-64 object-cover"
                        />
                        <div className="px-6 py-4">
                            <h1 className="text-3xl font-semibold text-gray-800">{blogPost.title}</h1>
                            <div className="flex items-center mt-2">
                                <img
                                    src={blogPost.writeImg} // Use the writeImg URL from params
                                    alt="Blogger"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                                <p className="text-sm text-gray-600 ml-2">
                                    Writer: {blogPost.writer} | Date: {blogPost.date}
                                </p>
                            </div>
                            <p className="text-gray-700 mt-4">{blogPost.desc}</p>
                            <div className="mt-4 space-x-2 border-b-2 border-slate-200 pb-6">
                                <span className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-2 py-1 text-xs">
                                    {blogPost.tag1}
                                </span>
                                <span className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-2 py-1 text-xs">
                                    {blogPost.tag2}
                                </span>
                            </div>
                            <div className="mt-6 text-gray-700 text-lg leading-relaxed">
                                {blogPost.blog}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
