"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/logo.webp";

// Updated navigation based on user's latest screenshot
const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Industries We Serve", href: "/industries-we-serve" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact-us" },
];

export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    // Avoid hydration mismatch by not rendering anything that depends on window/client-only state until mounted
    // Though simple boolean states like isMenuOpen are usually fine.

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${isScrolled ? "bg-black/80 backdrop-blur-lg py-3 shadow-2xl" : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="flex items-center shrink-0">
                            <Link href="/" className="flex items-center gap-2 group">
                                <Image
                                    src={logo}
                                    alt="Chameleo Logo"
                                    width={160}
                                    height={45}
                                    className="w-32 md:w-36 lg:w-40 h-auto transition-transform duration-300 group-hover:scale-105"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navigation.map((item) => {
                                const isActive =
                                    item.href !== "#" &&
                                    (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`relative px-5 py-2 text-sm font-bold tracking-tight transition-all duration-300 uppercase ${isActive ? "text-primary" : "text-gray-400 hover:text-[#ed1d24]"
                                            }`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-[#ed1d24] rounded-full shadow-[0_0_12px_rgba(237,29,36,0.8)]" />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* CTA & Hamburger */}
                        <div className="flex items-center gap-5">
                            <Link
                                href="/contact-us"
                                className="hidden sm:inline-flex h-[46px] items-center justify-center rounded-full bg-primary text-black hover:bg-[#ed1d24] hover:text-primary px-8 text-sm font-black uppercase tracking-wider transition-all duration-500 border border-transparent hover:border-[#ed1d24] shadow-lg hover:shadow-[#ed1d24]/40"
                            >
                                Let&apos;s Talk
                            </Link>

                            {/* Hamburger Button */}
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="lg:hidden flex flex-col items-end gap-1.5 p-3 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all duration-300 group active:scale-90"
                                aria-label="Open Menu"
                            >
                                <span className="w-6 h-[2px] bg-primary group-hover:bg-[#ed1d24] transition-all duration-300"></span>
                                <span className="w-4 h-[2px] bg-primary group-hover:bg-[#ed1d24] transition-all duration-300"></span>
                                <span className="w-5 h-[2px] bg-primary group-hover:bg-[#ed1d24] transition-all duration-300"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Off-canvas Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/90 backdrop-blur-md z-[60] transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Off-canvas Side Drawer - Matching the screenshot provided by user */}
            <div
                className={`fixed top-0 right-0 w-full sm:w-[450px] h-full bg-black z-[70] transition-all duration-700 cubic-bezier(0.85, 0, 0.15, 1) flex flex-col border-l border-primary/5 shadow-[-20px_0_60px_rgba(0,0,0,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-8 pt-10 border-b border-primary/5">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={140}
                            height={40}
                            className="w-32 h-auto"
                        />
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-3 bg-primary/5 rounded-full hover:bg-primary/10 text-primary transition-all duration-300 hover:rotate-90 group border border-primary/5"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-1 p-8">
                        {navigation.map((item) => {
                            const isActive =
                                item.href !== "#" &&
                                (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));

                            return (
                                <div key={item.name} className="group/item">
                                    <Link
                                        href={item.href}
                                        className={`flex items-center justify-between text-2xl font-bold font-heading py-4 transition-all duration-300 ${isActive ? "text-[#ed1d24]" : "text-primary hover:text-primary hover:pl-2"
                                            }`}
                                    >
                                        <span>{item.name}</span>
                                        {item.hasDropdown && (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-300 ${isActive ? "text-[#ed1d24]" : "text-primary"}`}>
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        )}
                                    </Link>
                                    <div className="h-[1px] w-full bg-primary/5" />
                                </div>
                            );
                        })}
                    </nav>

                    {/* Contact Info - Matching Screenshot */}
                    <div className="mt-auto p-8 space-y-10">
                        <div className="space-y-6">
                            <h4 className="text-sm font-black uppercase tracking-[2px] text-[#ed1d24]">Contact Info :</h4>
                            <div className="space-y-4">
                                <a href="mailto:info@chameleogfxstudio.com" className="flex items-center gap-3 text-lg font-bold text-primary hover:text-[#ed1d24] transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <span>info@chameleogfxstudio.com</span>
                                </a>
                                <a href="tel:+918460384838" className="flex items-center gap-3 text-lg font-bold text-primary hover:text-[#ed1d24] transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>+91-846-038-4838</span>
                                </a>
                                <a href="tel:+919737472636" className="flex items-center gap-3 text-lg font-bold text-primary hover:text-[#ed1d24] transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>+91-973-747-2636</span>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-sm font-black uppercase tracking-[2px] text-[#ed1d24]">Follow Us :</h4>
                            <div className="flex items-center gap-6">
                                <a href="#" className="p-3 bg-primary/5 rounded-xl text-primary hover:bg-[#ed1d24] hover:text-primary transition-all duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>
                                <a href="#" className="p-3 bg-primary/5 rounded-xl text-primary hover:bg-[#ed1d24] hover:text-primary transition-all duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                                <a href="#" className="p-3 bg-primary/5 rounded-xl text-primary hover:bg-[#ed1d24] hover:text-primary transition-all duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ed1d24;
        }
      `}</style>
        </>
    );
}
