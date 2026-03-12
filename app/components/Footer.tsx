import Link from "next/link";
import { siteConfig } from "@/utils/site";

export function Footer() {
    return (
        <footer className="border-t border-gray-200/10 bg-black text-gray-400 py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-primary tracking-tight">CGS.</h3>
                        <p className="text-sm text-gray-400">
                            {siteConfig.description}
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm hover:text-primary transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Social</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="text-sm hover:text-primary transition-colors">Twitter</a>
                            </li>
                            <li>
                                <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="text-sm hover:text-primary transition-colors">GitHub</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200/10 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
