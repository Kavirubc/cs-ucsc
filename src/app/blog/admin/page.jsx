"use client"
import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    const goToCreatePage = () => {
        window.location.href = "admin/create";
    };

    const goToAllPage = () => {
        window.location.href = "admin/all";
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <button onClick={goToCreatePage}>Go to Create Page</button>
            <br />
            <button onClick={goToAllPage}>Go to All Page</button>
        </div>
    );
};

export default Page;
