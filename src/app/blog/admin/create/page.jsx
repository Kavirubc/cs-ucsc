"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        blog: '',
        writer: '',
        date: '',
        tag1: '',
        tag2: '',
        backImg: '',
        writeImg: ''
    });

    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Submit the form data to your PocketBase backend
        try {
            const response = await fetch('http://127.0.0.1:8090/api/collections/blogs/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Clear the form and possibly redirect or refresh the page
            setFormData({
                title: '',
                desc: '',
                blog: '',
                writer: '',
                date: '',
                tag1: '',
                tag2: '',
                backImg: '',
                writeImg: ''
            });

            router.refresh(); // or use router.push('/some-path') to redirect
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle the error as needed
        }
    };

    const handleClear = () => {
        setFormData({
            title: '',
            desc: '',
            blog: '',
            writer: '',
            date: '',
            tag1: '',
            tag2: '',
            backImg: '',
            writeImg: ''
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input className="block w-full p-2 border border-gray-300 rounded" type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
                <textarea className="block w-full p-2 border border-gray-300 rounded" name="desc" placeholder="Description" value={formData.desc} onChange={handleChange} />
                <textarea className="block w-full p-2 border border-gray-300 rounded" name="blog" placeholder="Blog Content" value={formData.blog} onChange={handleChange} />
                <input className="block w-full p-2 border border-gray-300 rounded" type="text" name="writer" placeholder="Writer" value={formData.writer} onChange={handleChange} />
                <input className="block w-full p-2 border border-gray-300 rounded" type="text" name="date" placeholder="Date" value={formData.date} onChange={handleChange} />
                <input className="block w-full p-2 border border-gray-300 rounded" type="text" name="tag1" placeholder="Primary Tag" value={formData.tag1} onChange={handleChange} />
                <input className="block w-full p-2 border border-gray-300 rounded" type="text" name="tag2" placeholder="Secondary Tag (optional)" value={formData.tag2} onChange={handleChange} />
                <input className="block w-full p-2 border border-gray-300 rounded" type="text" name="backImg" placeholder="Background Image URL" value={formData.backImg} onChange={handleChange} />
                <input className="block w-full p-2 border border-gray-300 rounded" type="text" name="writeImg" placeholder="Writer Image URL" value={formData.writeImg} onChange={handleChange} />

                <div className="flex justify-between">
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
                    <button type="button" onClick={handleClear} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Clear</button>
                </div>
            </form>
        </div>
    );
}

export default Page;
