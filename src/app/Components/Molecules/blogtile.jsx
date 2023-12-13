import React from 'react';


const Blogtile = () => {
    return (
        <div className="flex flex-row max-w-full bg-white shadow-lg my-7">
            <div className="w-1/2 pl-10 py-p">
                <img src="https://test1.ko-de.org/test.png" alt="Blog Image" width={400} height={300} className="rounded-l-lg" />
            </div>
            <div className="w-1/2 p-6">
                <div className="font-bold text-2xl mb-2">150: It is Podcasts All the Way Down</div>
                <p className="text-gray-700 text-base">
                    Ut rhoncus vulputate feugiat. Etiam posuere aliquam tortor. Morbi nec felis quis augue ornare commodo. Donec est libero, elementum eget ultrices sed, posuere non nibh.
                </p>
                <div className="flex items-center mt-4">
                    <img src="https://test1.ko-de.org/test.png" alt="Blogger" width={40} height={40} className="rounded-full" />
                    <span className="ml-2 text-sm text-gray-600">by John Doe</span>
                </div>
                <div className="flex flex-wrap items-center mt-4">
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">DEC 4, 2019</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TECHNOLOGY</span>
                    {/* Add more tags as needed */}
                </div>
            </div>
        </div>
    );
};

export default Blogtile;
