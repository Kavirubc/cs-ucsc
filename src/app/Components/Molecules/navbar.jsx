"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState('');

    const links = [
        { label: "All", href: "/blog" },
        { label: "About", href: "/about" },
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
                        <div className="text-black hover:text-wave-accent cursor-pointer font-bold text-3xl mt-[2px]">B</div>
                    </Link>
                
                <ul className="hidden md:flex space-x-6 items-center content-center">
                    {links.map((link) => (
                        
                        <li key={link.href} className={isActive(link.href) ? ' bg-slate-200 rounded-xl shadow-sm' : ''}>
                            <div className='md:flex items-center content-center '>
                            <Link href={link.href}>
                                    <div className='px-4'>
                                        <div className={`text-black flex flex-row justify-center underline-animation cursor-pointer mx-4 max-w-[28px] py-2 ${isActive(link.href) ? 'text-gray-700' : ''}`}>{link.label}</div></div>
                            </Link>
                            </div>
                        </li>
                    ))}
                </ul>
                <Link href="/">
                    <div className="md:bg-orange-500 text-white md:px-4 md:py-2 md:hover:bg-orange-600 rounded-xl cursor-pointer">Subscribe</div>
                </Link>
                    <div className="md:hidden">
                        <Popover>
                            <Popover.Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black hover:text-wave-accent">
                                {/* Hamburger Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list pt-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 3.5A.5.5 0 0 1 3 3h10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.5zM2.5 7.5A.5.5 0 0 1 3 7h10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.5zM2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.5z" />
                                </svg>
                            </Popover.Button>

                            <Popover.Panel
                                className={`${isMenuOpen ? 'h-full w-full right-0' : 'hidden'} fixed z-50 bg-white/30 backdrop-blur-lg transition-opacity shadow-sm shadow-zinc-500 ease-in-out rounded-b-3xl p-4 mt-[18px] md:hidden`}
                            >

                            
                                <div className="flex flex-col py-9 justify-start max-h-[calc(100vh-70px)]">
                                    {links.map((link, index) => (
                                        <Link href={link.href} key={link.href + index}>
                                            <div
                                                onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
                                                className={`text-black text-2xl  text-center hover:text-orange-500 cursor-pointer ${isActive(link.href) ? 'text-orange-500' : ''} py-4 transition-transform duration-300 ease-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                                style={{ transitionDelay: `${index * 100}ms` }}
                                            > 
                                                {link.label}
                                            </div>
                                        </Link>
                                    ))}
                                    <Link href="/">
                                        <div onClick={() => setIsMenuOpen(false)} className="bg-orange-500 text-white text-2xl  p-2 hover:bg-gray-400  cursor-pointer text-center mt-4">
                                            Subscribe
                                        </div>
                                    </Link>
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

