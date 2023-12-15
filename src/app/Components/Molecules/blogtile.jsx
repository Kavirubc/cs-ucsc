import React from 'react';
import Link from 'next/link';

const Blogtile = (props) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row w-96 md:w-auto bg-white shadow-lg my-8 rounded-lg overflow-hidden md:max-w-4xl">
                <div className="md:w-1/3 flex">
                    {/* Make image prop and update the Data.js with an image URL */}
                    <img src={props.backImg} alt="Blog" className="object-cover w-full  h-48 md:h-auto md:rounded-l-lg" />
                </div>
                <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 mb-2">{props.title}</h2>
                        {/* Wrap the description in a div with fixed height and overflow properties */}
                        <div className="description-container" style={{ height: '50px', overflow: 'hidden' }}>
                            <p className="text-gray-600 text-sm">{props.desc}</p>
                        </div>
                    </div>
                    <div>
                    <div className="flex items-center mb-4">
                        <img src={props.writeImg} alt="Blogger" className="rounded-full w-10 h-10" />
                        <span className="ml-2 text-sm text-gray-500">{props.writer}</span>
                    </div>
                    <div className="flex flex-wrap items-center mt-2 text-xs">
                        <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-700 mr-2 mb-2">{props.date}</span>
                        <span className="bg-orange-500 hover:bg-orange-600 rounded-md px-3 py-1 text-white mr-2 mb-2">{props.tag1}</span>
                        <span className="bg-orange-500 hover:bg-orange-600 rounded-md px-3 py-1 text-white mr-2 mb-2">{props.tag2}</span>
                        {/* Add more tags as needed */}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogtile;
