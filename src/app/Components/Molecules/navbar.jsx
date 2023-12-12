"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState('');

    const links = [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        // Only run this code on the client side
        if (typeof window !== 'undefined') {
            const { pathname } = window.location;
            setActivePath(pathname);
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (href) => {
        return activePath === href;
    };

    return (
        <nav className="bg-white border-b-2 border-gray-100">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <div className="text-black hover:text-wave-accent cursor-pointer font-bold text-lg">Blog</div>
                    </Link>
                    <ul className="hidden md:flex space-x-4 items-center content-center">
                        {links.map((link) => (
                            <li key={link.href} className={isActive(link.href) ? 'border-b-2 border-black' : ''}>
                                <Link href={link.href}>
                                    <div className={`text-black hover:text-wave-accent underline-animation cursor-pointer ${isActive(link.href) ? 'text-gray-700' : ''}`}>{link.label}</div>
                                </Link>
                            </li>
                        ))}
                        <li >
                            
                        </li>
                    </ul>
                    <Link href="/">
                        <div className="md:bg-orange-500 text-white px-4 py-2 md:hover:bg-orange-600 rounded-full cursor-pointer">Subscribe</div>
                    </Link>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black hover:text-wave-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 3.5A.5.5 0 0 1 3 3h10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.5zM2.5 7.5A.5.5 0 0 1 3 7h10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.5zM2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.5z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-md py-4`}>
                <ul className="px-4">
                    {links.map((link) => (
                        <div className=''>
                        <li key={link.href} className="mb-2">
                            
                            <Link href={link.href}>
                                <div className={`text-black text-center hover:text-wave-accent underline-animation cursor-pointer ${isActive(link.href) ? 'text-gray-700' : ''}`}>{link.label}</div>
                            </Link>
                        </li>
                        
                        </div>
                    ))}
                    <li>
                        <Link href="/">
                            <div className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 rounded-full cursor-pointer text-center">Subscribe</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
