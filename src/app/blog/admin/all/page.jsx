import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import Modal from '../components/Modal'; // Import or create a modal component

function SearchAndUpdatePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('update'); // 'update' or 'delete'

    const fetchSearchResults = async (term) => {
        // Replace with your actual backend endpoint
        const response = await fetch(`http://127.0.0.1:8090/api/search?title=${term}`);
        const data = await response.json();
        setSearchResults(data);
    };

    const debouncedFetchResults = useCallback(debounce(fetchSearchResults, 300), []);

    useEffect(() => {
        if (searchTerm) {
            debouncedFetchResults(searchTerm);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm, debouncedFetchResults]);

    const handleUpdate = async (updatedData) => {
        // Send updatedData to your backend to update the blog
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        // Send a request to your backend to delete the blog
        setIsModalOpen(false);
    };

    const openModal = (type, blog) => {
        setModalType(type);
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Search and Update Blog Posts</h2>
            <input
                className="block w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div>
                {searchResults.map((blog) => (
                    <div key={blog.id} className="flex justify-between items-center p-2 border-b">
                        <span>{blog.title}</span>
                        <div>
                            <button
                                onClick={() => openModal('update', blog)}
                                className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => openModal('delete', blog)}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    blog={selectedBlog}
                    type={modalType}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                />
            )}
        </div>
    );
}

export default SearchAndUpdatePage;
