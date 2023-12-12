import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" bg-white text-slate-700">
            <div className="container mx-auto px-6 py-9 ">
                <div className="flex flex-col mt-4">


                    <div className=" flex flex-row  space-x-4 justify-center ">
                        <Link href="#" ><div className="text-sm hover:text-black text-gray-400 text-center">About Us</div></Link>
                        <Link href="#" ><div className="text-sm hover:text-black text-gray-400 text-center">Contact Us</div></Link>
                        <Link href="#" ><div className="text-sm hover:text-black text-gray-400 text-center">Visit Us</div></Link>
                    </div>
                    <div className=" flex flex-row justify-center my-10  space-x-4">
                        <Link href="#" ><div className="text-sm hover:text-black text-gray-400 text-center">IEEE CS</div></Link>
                        <Link href="#" ><div className="text-sm hover:text-black text-gray-400 text-center">IEEE</div></Link>
                    </div>


                    <p className="text-sm text-slate-300 hover:text-indigo-300 text-center">© {new Date().getFullYear()} IEEE CS UCSC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
