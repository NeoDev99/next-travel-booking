import React from "react";
import Link from "next/link";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import DropdownUser from "../shared/DropdownUser";

// navlinks array
const navlinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tours", href: "/tours" },
    { name: "Contact", href: "/contact" },
];

const Header = async () => {
    const session = await getServerSession(authOptions);
    
    return (
        <header className="bg-white shadow-lg">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo Section */}
                <div className="text-xl font-bold">
                    <Link href="/" className="text-black">
                        Travel<span className="text-slate-400">Booking</span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    {navlinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-gray-800 hover:text-blue-600 font-medium">
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Utility Section (e.g., Login/SignUp) */}
                <div className="flex items-center gap-6">
                    {session?.user ? (
                        <DropdownUser isAdmin={session.user.isAdmin} />
                    ) : (
                        <Link
                            href="/sign-in"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
