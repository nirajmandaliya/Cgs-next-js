import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
    title: "About Us",
    description: "Learn more about the CGS agency, our mission, and our team.",
});

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-[64rem]">
            <div className="flex flex-col gap-6">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">About Us</h1>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                    We are passionate about building performant, accessible, and beautiful web experiences.
                </p>
                <div className="prose dark:prose-invert max-w-none mt-8">
                    <h2>Our Missions</h2>
                    <p>
                        To empower businesses with cutting-edge web technology, ensuring they stand out in the digital landscape
                        with superior performance and remarkable design.
                    </p>
                    <h2>Our Expertise</h2>
                    <ul>
                        <li>Next.js & React ecosystem</li>
                        <li>Performant Server-Side Rendering (SSR)</li>
                        <li>Tailwind CSS Design Systems</li>
                        <li>Advanced SEO Strategy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
