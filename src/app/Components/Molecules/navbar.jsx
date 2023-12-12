
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-white">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <div className="text-black hover:text-wave-accent">Blog</div>
                    </Link>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/about">
                                <div className="text-black hover:text-wave-accent underline-animation">About</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <div className="text-black hover:text-wave-accent underline-animation">Blog</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <div className="text-black hover:text-wave-accent underline-animation">Contact</div>
                            </Link>
                        </li>
                    </ul>
                    <Link href="/">
                        <div className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 rounded-full">Subscribe</div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
