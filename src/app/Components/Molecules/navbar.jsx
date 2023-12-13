"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState('');

    const links = [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const { pathname } = window.location;
            setActivePath(pathname);
        }
    }, []);

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
                    </ul>
                    <Link href="/">
                        <div className="md:bg-orange-500 text-white md:px-4 md:py-2 md:hover:bg-orange-600 rounded-full cursor-pointer">Subscribe</div>
                    </Link>
                    <div className="md:hidden">
                        <Popover>
                            <Popover.Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black hover:text-wave-accent">
                                {/* Hamburger Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list pt-1" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 3.5A.5.5 0 0 1 3 3h10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.5zM2.5 7.5A.5.5 0 0 1 3 7h10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.5zM2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.5z" />
                                </svg>
                            </Popover.Button>

                            <Popover.Panel
                                className={`${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                                    } fixed inset-0 z-40 bg-white transition-opacity duration-300 ease-in-out transform`}
                            >
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="absolute top-0 right-0 pt-4 pr-4"
                                >
                                    {/* Close Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="bi bi-x-lg"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 1 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                </button>
                                <div className='px-4 py-4'>
                                    <ul>
                                        {links.map((link, index) => (
                                            <li key={link.href + index} className="mb-2">
                                                <Link href={link.href}>
                                                    <div className={`text-black text-center hover:text-wave-accent cursor-pointer ${isActive(link.href) ? 'text-orange-500' : ''}`}>{link.label}</div>
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <Link href="/">
                                                <div className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 md:rounded-full cursor-pointer text-center">Subscribe</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Popover.Panel>
                        </Popover>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
