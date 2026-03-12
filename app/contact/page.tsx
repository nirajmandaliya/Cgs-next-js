import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
    title: "Contact Us | Let's Talk",
    description: "Get in touch with CGS agency to start building your next big vision.",
});

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-[64rem]">
            <div className="grid gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
                        Let&apos;s build something amazing together. Reach out to discuss your project.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            <span>hello@cgs-agency.example.com</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span>+1 (555) 000-0000</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            <span>123 Innovation Drive, Tech City, TC 10101</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl border border-primary/10 bg-primary/5 p-6 md:p-8 shadow-sm dark:border-primary/10 dark:bg-black">
                    <form className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="first-name" className="text-sm font-medium leading-none">First name</label>
                                <input id="first-name" className="flex h-10 w-full rounded-md border border-primary/10 bg-primary/5 px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:border-primary/10 dark:bg-black dark:placeholder:text-gray-400" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="last-name" className="text-sm font-medium leading-none">Last name</label>
                                <input id="last-name" className="flex h-10 w-full rounded-md border border-primary/10 bg-primary/5 px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:border-primary/10 dark:bg-black dark:placeholder:text-gray-400" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                            <input id="email" type="email" className="flex h-10 w-full rounded-md border border-primary/10 bg-primary/5 px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:border-primary/10 dark:bg-black dark:placeholder:text-gray-400" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
                            <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-primary/10 bg-primary/5 px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:border-primary/10 dark:bg-black dark:placeholder:text-gray-400" placeholder="How can we help?" />
                        </div>
                        <button type="button" className="inline-flex h-10 w-full items-center justify-center rounded-md bg-[#ed1d24] px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ed1d24]">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
