import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";


export default function NavLink({ href, children }) {
    const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic subpages
    const active = pathname === href;

    return (
        <Link href={href} passHref>
            <div
                className={clsx(
                    "px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors",
                    active ? "bg-secondaryA text-primary" : "text-secondary"
                )}
            >
                {children}
            </div>
        </Link>
    );
}
